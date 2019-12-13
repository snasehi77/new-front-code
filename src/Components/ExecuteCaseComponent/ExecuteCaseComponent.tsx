import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {executeFLowStep, getAllChoiceList, getExecute} from "../../Services";

import {toMap} from "../../Utils/Utilities";
import MetadataInputComponent from "../Shared/MetadataInputComponent/MetadataInputComponent";
import FooterControlsComponent from "../Shared/FooterControlsComponent/FooterControlsComponent";

declare var document: any;

const ExecuteCaseComponent = ({match}: any) => {
  const [id, setId] = useState(0);
  const [data, setData] = useState<any>({});
  const [fields, setFields] = useState([]);
  const [info, setInfo] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const [currentQuestion, setQuestion] = useState<any>({value: {}, index: 0});
  const [choiceListMap, setChoiceListMap] = useState<any>({});
  const [history, setHistory] = useState<any>({});

  useEffect(() => {
    setId(match.params.id);
    getAllChoiceList().then((res: any) => {
      if (res) {
        let map = toMap(res.items, "id");
        setChoiceListMap(map);
      }
    });
  }, [match]);

  useEffect(() => {
    if (id) {
      getExecute(id).then((res: any) => {
        if (res) {
          setFlowStep(res);
        }
      });
    }
  }, [id]);

  function setFlowStep(res: any) {
    console.log(res);
    setLoading(false);
    if (res.success) {
      setData(res);
      setQuestion({
        value: res.item.views[0] ? res.item.views[0] : [],
        index: 0
      });
    } else {
      // setQuestion({value: [], index: 0});
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
    });
    // console.log(resultFields)
    setExecuteFlowStep(resultFields);
  }

  function setExecuteFlowStep(fieldsData: any) {
    setLoading(true);
    executeFLowStep(fieldsData, data.item.flow_execution_id, data.item.id).then(res => {
        if (res) {
          setInfo(null);
          setFields([]);
          setQuestion({value: {}, index: 0});
          setFlowStep(res);
        }
      }
    );
  }

  return (
    <div className="container">
      {/*{data.item && !isLoading && (*/}
      {/*	<h2 className="text-center">{data.item.views[0].name}</h2>*/}
      {/*)}*/}

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
                        <b>{v.prompt}</b>
                      </label>
                    )}

                    <MetadataInputComponent
                      type={
                        v.field_type === "CHOICE_LIST" ? v.format : v.field_type
                      }
                      id={v.id}
                      label={v.label}
                      placeholder={v.prompt}
                      childType={v.format}
                      onChange={(value: any) =>
                        setInfo({...info, [v.id]: value})
                      }
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
        <FooterControlsComponent disabledBack={isLoading}
                                 disabledNext={isLoading}
                                 hiddenNext={!!fields.filter((f: any) => (f.format === "BUTTON"
                                   || (f.format === "RADIO_BUTTON" && f.single_value))
                                   || f.field_type === "BOOLEAN").length}
                                 onNext={() => document.getElementById("nextStep").click()}/>
      )}
    </div>

  );
};
export default withRouter(ExecuteCaseComponent);
