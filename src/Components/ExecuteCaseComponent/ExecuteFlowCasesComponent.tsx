import React, {FormEvent, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import * as Service from "../../Services";
import LoadingSpinnerComponent from "../Shared/LoadingSpinnerComponent";
import ExecutionInput from "execution-input/dist";
import {eventClick, getOptions, getTag, getValueField, setDefaultValues, toMap} from "../../Utils/Utilities";
import {DateRangePicker, SingleDatePicker} from "react-dates";
import moment from "moment";
import FooterControlsComponent from "../Shared/FooterControlsComponent/FooterControlsComponent";
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import history from "../../Utils/History";

const ExecuteFlowCasesComponent = () => {
    const {id} = useParams();
    const [currentFlow, setCurrentFlow] = useState<any>({});
    const [loadingFlow, setLoadingFLow] = useState(true);
    const [fields, setFields] = useState<Array<any>>([]);
    const [choiceListMap, setChoiceListMap] = useState<any>({});
    const [values, setValues] = useState<any>({});
    const [defaultValues, setValuesDefault] = useState<any>(null);
    const [endFlow, setEndFlow] = useState<boolean>(false);
    //------------ for inputs
    const [focused, setFocused] = useState<any>({});
    useEffect(() => {
        if (id) executeFLow(parseInt(id));
        Service.getAllChoiceList().then((res: any) => {
            let map = toMap(res.items, "id");
            setChoiceListMap(map);
        });
        return () => {
        }
    }, [id]);

    useEffect(() => {
        if (currentFlow.views) {
            const {views} = currentFlow;
            setFields(views[0] ? views[0].fields : []);
        } else {
            setFields([]);
        }
    }, [currentFlow]);

    useEffect(() => {
        if (defaultValues && fields.length) {
            setValues(setDefaultValues(defaultValues, fields, choiceListMap))
        }
    }, [defaultValues]);

    async function executeFLow(id: number) {
        const res = await Service.getExecute(id);
        setResFlow(res)
    }

    function setResFlow(res: any) {
        setLoadingFLow(false);
        if (res.success) {
            setCurrentFlow(res.item);
            setLoadingFLow(false);
        } else {
            setEndFlow(true);
            resetValues();
        }
    }

    function resetValues() {
        setValues({});
        setCurrentFlow({});
        setLoadingFLow(false);
    }

    function setValuesField(type: string, id: string, value: any) {
        setValues({...values, [id]: value});
    }


    function openFocused(type: string, id: string) {
        if (type === "DATE_RANGE") {
            return focused[id] ? focused[id] : null;
        } else if (type === "DATE") {
            return focused[id] ? focused[id] : false;
        }
    }

    function getValuesField(type: string, id: string, sg: boolean) {
        switch (type) {
            case "SMALL_TEXT":
            case "LARGE_TEXT":
            case "NUMBER":
            case "TIME":
                return values[id] ? values[id] : "";
            case "RADIO_BUTTON":
                return sg ? (values[id] ? values[id].value : {}) : (values[id] ? values[id] : {});
            case "SELECT":
                return values[id] ? values[id] : null;
            case "DATE":
                return values[id] ? values[id] : new Date();
            case "DATE_RANGE":
                return values[id] ? values[id] : {from: new Date(), to: new Date()};
            default:
                return ""
        }
    }

    async function setExecuteFlowStep(fieldsData: any, id: number) {
        setLoadingFLow(true);
        const res = await Service.executeFLowStep(fieldsData, currentFlow.flow_execution_id, id);
        resetValues();
        setResFlow(res);
    }

    async function backFlow() {
        setLoadingFLow(true);
        const res = await Service.getExecuteFLowStep(currentFlow.flow_execution_id, currentFlow.prev_step_execution_id);
        if (res && res.success) {
            resetValues();
            setResFlow(res);
            const valuesForm: any = Object.values(res.item.form_data).reduce((obj: any, i: any) => {
                obj[i.id] = i.value;
                return obj
            }, {});
            setValuesDefault(valuesForm)
        }
    }

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const mapField: any = toMap(fields, "id");
        let resultFields: Array<any> = [];
        Object.keys(values).forEach(f => {
            if (mapField[f]) {
                resultFields.push({
                    id: parseInt(f),
                    view_id: mapField[f].view_id,
                    name: mapField[f].name,
                    value: getValueField(mapField[f].field_type === "CHOICE_LIST" ?
                        mapField[f].format : mapField[f].field_type, values[f], mapField[f].single_value),
                    tag: getTag(mapField[f].choice_list_id, choiceListMap)
                });
            }
        });
        setExecuteFlowStep(resultFields, currentFlow.id);
    }

    return (
        <div className="w-50 pt-5 m-auto">
            <LoadingSpinnerComponent loading={loadingFlow}/>
            <form onSubmit={(e) => onSubmit(e)}>
                {!!fields.length && !loadingFlow && <div>
                    {fields.map((f: any) => {
                        return <div key={f.id + "field"}>
                            <ExecutionInput id={f.id + "fields_type"}
                                            label={f.label}
                                            moment={moment}
                                            required
                                            radioAction={() => eventClick("onSubmit")}
                                            childType={f.format}
                                            placeholder={f.prompt}
                                            singleValue={f.single_value}
                                            DateRangePicker={DateRangePicker}
                                            SingleDatePicker={SingleDatePicker}
                                            options={getOptions(f.choice_list_id, choiceListMap)}
                                            focused={openFocused(f.field_type, f.id)}
                                            onChange={e => setValuesField(f.field_type, f.id, e)}
                                            type={f.field_type === "CHOICE_LIST" ? f.format : f.field_type}
                                            setFocused={(e: any) => setFocused({...focused, [f.id]: e})}
                                            value={getValuesField(f.field_type === "CHOICE_LIST" ? f.format : f.field_type, f.id, f.single_value)}
                            />
                        </div>
                    })}
                </div>}
                <button className="invisible" id="onSubmit">{}</button>
            </form>

            {!!fields.length && (
                <FooterControlsComponent
                    onBack={backFlow}
                    disabledBack={loadingFlow}
                    disabledNext={loadingFlow}
                    hiddenBack={!currentFlow.prev_step_execution_id}
                    hiddenNext={!!fields.filter((f: any) => (f.format === "BUTTON"
                        || (f.format === "RADIO_BUTTON" && f.single_value))
                        || f.field_type === "BOOLEAN").length}
                    onNext={() => eventClick("onSubmit")}/>
            )}

            <ModalComponent isOpen={false} toggle={() => {
            }} size="md" noFooter>
                <div className="pl-5 pr-5 text-center">
                    <p>
                        Unfortunately, based on the information provided you do not meet the
                        prescreen requirements of the lawyers in our network.
                    </p>
                    <button onClick={() => {
                        history.push('/')
                    }} className="btn btn-danger m-3">Back To Homepage
                    </button>
                </div>
            </ModalComponent>

            <ModalComponent isOpen={endFlow} toggle={() => {
            }} size="md" noFooter>
                <div className="pl-5 pr-5 text-center">
                    <p>
                        Unfortunately, based on the information provided you do not meet the
                        prescreen requirements of the lawyers in our network.
                    </p>
                    <button onClick={() => {
                        history.push('/')
                    }} className="btn btn-danger m-3">Back To Homepage
                    </button>
                </div>
            </ModalComponent>
        </div>
    )
};

export default ExecuteFlowCasesComponent;
