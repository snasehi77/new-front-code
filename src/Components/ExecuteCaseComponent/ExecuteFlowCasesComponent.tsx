import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import * as Service from "../../Services";
import LoadingSpinnerComponent from "../Shared/LoadingSpinnerComponent";
import ExecutionInput from "execution-input/dist";
import {toMap} from "../../Utils/Utilities";
import {DateRangePicker, SingleDatePicker} from "react-dates";
import moment from "moment";

const ExecuteFlowCasesComponent = () => {
    const {id} = useParams();

    const [currentFlow, setCurrentFlow] = useState<any>({});
    const [loadingFlow, setLoadingFLow] = useState(true);
    const [fields, setFields] = useState<Array<any>>([]);
    const [choiceListMap, setChoiceListMap] = useState<any>({});
    const [values, setValues] = useState<any>({});
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
        }
    }, [currentFlow]);

    useEffect(() => {
        console.log(values)
    }, [values]);

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
            resetValues();
        }
    }

    function resetValues() {
        setCurrentFlow({});
        setLoadingFLow(false);
    }

    function setValuesField(type: string, id: string, value: any) {
        setValues({...values, [id]: value});
    }

    function getOptions(id: string) {
        return choiceListMap[id]
            ? choiceListMap[id].values.map((c: any) => {
                return {
                    id: c.id,
                    value: c.value,
                    data: c,
                };
            }) : [];
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
                return values[id];
            case "RADIO_BUTTON":
                return sg ? (values[id] ? values[id].value : {}) : (values[id] ? values[id] : {});
            default:
                return ""
        }
    }

    return (
        <div className="w-50 pt-5 m-auto">
            <LoadingSpinnerComponent loading={loadingFlow}/>
            {!!fields.length && !loadingFlow && <div>
                {fields.map((f: any) => {
                    return <div key={f.id + "field"}>
                        <ExecutionInput id={f.id + "fields_type"}
                                        label={f.label}
                                        moment={moment}
                                        radioIcon="none"
                                        childType={f.format}
                                        placeholder={f.prompt}
                                        singleValue={f.single_value}
                                        DateRangePicker={DateRangePicker}
                                        SingleDatePicker={SingleDatePicker}
                                        options={getOptions(f.choice_list_id)}
                                        focused={openFocused(f.field_type, f.id)}
                                        dateRange={values[f.id] ? values[f.id] : null}
                                        onChange={e => setValuesField(f.field_type, f.id, e)}
                                        type={f.field_type === "CHOICE_LIST" ? f.format : f.field_type}
                                        setMultiSelect={(e: any) => setValuesField(f.field_type, f.id, e)}
                                        setFocused={(e: any) => setFocused({...focused, [f.id]: e})}
                                        value={getValuesField(f.field_type === "CHOICE_LIST" ? f.format : f.field_type, f.id, f.single_value)}
                                        multiSelect={getValuesField(f.field_type === "CHOICE_LIST" ? f.format : f.field_type, f.id, f.single_value)}
                        />
                    </div>
                })}
            </div>}
        </div>
    )
};

export default ExecuteFlowCasesComponent;
