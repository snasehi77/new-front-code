import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import * as Service from "../../Services";

import {toMap} from "../../Utils/Utilities";
import MetadataInputComponent from "../Shared/MetadataInputComponent/MetadataInputComponent";
import FooterControlsComponent from "../Shared/FooterControlsComponent/FooterControlsComponent";
import LogoComponent from "../Shared/LogoComponent";
import ModalComponent from "../Shared/ModalComponent/ModalComponent";
import history from "../../Utils/History";

declare var document: any;

const ExecuteCaseComponent = ({match}: any) => {
  const [id, setId] = useState(0);
  const [data, setData] = useState<any>({});
  const [fields, setFields] = useState([]);
  const [info, setInfo] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const [currentQuestion, setQuestion] = useState<any>({value: {}});
  const [choiceListMap, setChoiceListMap] = useState<any>({});
  const [defaultValues, setValuesDefault] = useState<any>({});
  const [endFlow, setEndFlow] = useState<boolean>(false);
  useEffect(() => {
    setId(match.params.id);
    Service.getAllChoiceList().then((res: any) => {
      let map = toMap(res.items, "id");
      setChoiceListMap(map);
    });
  }, [match]);

  useEffect(() => {
    if (id) {
      Service.getExecute(id).then((res: any) => {
        setFlowStep(res);
      });
    }
  }, [id]);

  function setFlowStep(res: any) {
    setLoading(false);
    if (res.success) {
      setData(res);
      setQuestion({
        value: res.item.views[0] ? res.item.views[0] : []
      });
    } else {
      setEndFlow(true);
      setInfo({});
      setFields([]);
    }
  }

  useEffect(() => {
    if (currentQuestion.value.fields) {
      let arrayFields = currentQuestion.value.fields;
      setFields(arrayFields);
    }
  }, [currentQuestion]);


  function nextQuestion(event: any) {
    event.preventDefault();
    const mapField: any = toMap(fields, "id");
    let resultFields: Array<any> = [];
    Object.keys(info).forEach(f => {
      if (mapField[f]) {
        resultFields.push({
          id: parseInt(f),
          view_id: mapField[f].view_id,
          name: mapField[f].name,
          value:
            mapField[f].field_type === "CHOICE_LIST" && !mapField[f].single_value
              ? info[f].map((v: any) => v.value)
              : mapField[f].field_type === "CHOICE_LIST" &&
              mapField[f].single_value
              ? info[f].value
              : info[f],

          tag:
            mapField[f].field_type === "CHOICE_LIST" && !mapField[f].single_value
              ? info[f][0].group_tag
              : mapField[f].field_type === "CHOICE_LIST" &&
              mapField[f].single_value
              ? info[f].group_tag
              : ""
        });
      }
    });
    setExecuteFlowStep(resultFields, data.item.id);
  }

  async function setExecuteFlowStep(fieldsData: any, id: number) {
    setLoading(true);
    const res = await Service.executeFLowStep(fieldsData, data.item.flow_execution_id, id);
    setInfo(null);
    setFlowStep(res);
  }

  async function getStep() {
    const res = await Service.getExecuteFLowStep(data.item.flow_execution_id, data.item.prev_step_execution_id);
    if (res && res.success) {
      setFlowStep(res);
      const valuesForm: any = Object.values(res.item.form_data).reduce((obj: any, i: any) => {
        obj[i.id] = i.value;
        return obj
      }, {});
      setValuesDefault(valuesForm)
    }

  }

  return (
    <div className="container">

      <LogoComponent className="mt-3" styles={{width: "200px"}}/>

      {!fields.length && !isLoading && (
        <div className="text-center p-5 m-5">
          <h1>no results</h1>
        </div>
      )}

      {isLoading && (
        <div className="text-center ptp-20 mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && <form onSubmit={event => nextQuestion(event)}>
        {currentQuestion.value.fields && (
          <div className="row justify-content-center pt-5">
            <div className="col-12 col-md-10 col-lg-8">
              {fields.map((v: any, i: any) => {
                return (
                  <div key={i} className="form-group">
                    {(!v.format ||
                      v.format === "EMAIL" ||
                      v.format === "PHONE" ||
                      v.format === "ZIPCODE" ||
                      v.format === "SSN") &&
                    v.field_type !== "TIME" &&
                    v.field_type !== 'LABEL' &&
                    v.field_type !== "TOGGLE_BUTTON"
                    && (
                      <label htmlFor={v.id}>
                        <b>{v.label}</b>
                      </label>
                    )}

                    {v.field_type === "TIME" && (
                      <label htmlFor={v.id}>
                        <b>{v.label}</b>
                      </label>
                    )}

                    <MetadataInputComponent
                      type={
                        v.field_type === "CHOICE_LIST" ? v.format : v.field_type
                      }
                      defaultValue={defaultValues ? defaultValues[v.id] : null}
                      id={v.id}
                      label={v.label}
                      placeholder={v.prompt}
                      childType={v.format}
                      onChange={(value: any) => setInfo({...info, [v.id]: value})}
                      singleValue={v.single_value}
                      listOptions={
                        choiceListMap[v.choice_list_id]
                          ? choiceListMap[v.choice_list_id].values
                          : []
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <button style={{display: "none"}} id="nextStep">{}</button>
      </form>}

      {!!fields.length && (
        <FooterControlsComponent
          onBack={getStep}
          disabledBack={isLoading}
          disabledNext={isLoading}
          hiddenBack={!data.item.prev_step_execution_id}
          hiddenNext={!!fields.filter((f: any) => (f.format === "BUTTON"
            || (f.format === "RADIO_BUTTON" && f.single_value))
            || f.field_type === "BOOLEAN").length}
          onNext={() => document.getElementById("nextStep").click()}/>
      )}

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

  );
};
export default withRouter(ExecuteCaseComponent);
