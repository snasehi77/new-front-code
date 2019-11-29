import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import {executeFLowStep, getAllChoiceList, getExecute} from "../../Services";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {toMap} from "../../Utils/Utilities";
import MetadataInput from "../Shared/MetadataInputComponent/MetadataInput";

declare var document: any;

const ExecuteCase = ({match}: any) => {
  const [id, setId] = useState(0);
  const [data, setData] = useState<any>({});
  const [fields, setFields] = useState([]);
  const [info, setInfo] = useState<any>({});
  const [isLoading, setLoading] = useState(true);
  const [currentQuestion, setQuestion] = useState<any>({value: {}, index: 0});
  const [choiceListMap, setChoiceListMap] = useState<any>({});

  useEffect(() => {
    setId(match.params.id);
    getAllChoiceList().then((res: any) => {
      let map = toMap(res.items, "id");
      setChoiceListMap(map);
    });
  }, [match]);

  useEffect(() => {
    if (id) {
      getExecute(id).then((res: any) => {
        setFlowStep(res);
      });
    }
  }, [id]);

  function setFlowStep(res: any) {
    setData(res);
    setLoading(false);
    if (res.success) {
      setQuestion({
        value: res.item.views[0] ? res.item.views[0] : [],
        index: 0
      });
    } else {
      setQuestion({value: [], index: 0});
    }
  }

  useEffect(() => {
    if (currentQuestion.value.fields) {
      let arrayFields = currentQuestion.value.fields;
      arrayFields.push({
        id: 999,
        field_type: 'TOGGLE_BUTTON',
        name: 'toggle_button1',
        prompt: 'Select a year',
        label: 'How many years ago it happened '
      });
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

    setExecuteFlowStep(resultFields);
  }

  function setExecuteFlowStep(fieldsData: any) {
    executeFLowStep(fieldsData, data.item.flow_execution_id, data.item.id).then(
      res => {
        setInfo(null);
        setFields([]);
        setQuestion({value: {}, index: 0});
        setFlowStep(res);
      }
    );
  }

  return (
    <div  className="container">
      {/*{data.item && !isLoading && (*/}
      {/*	<h2 className="text-center">{data.item.views[0].name}</h2>*/}
      {/*)}*/}

      {!fields.length && !isLoading && (
        <div className="text-center p-5 m-5">
          <h1>no results</h1>
        </div>
      )}

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <form onSubmit={event => nextQuestion(event)}>
        {currentQuestion.value.fields && (
          <div className="row justify-content-center p-0">
            <div className="col-12 col-md-10 col-lg-8">
              {fields.map((v: any, i: any) => {
                return (
                  <div key={i} className="form-group">
                    {(v.format === "BUTTON" ||
                      v.format === "RADIO_BUTTON" ||
                      v.field_type === 'TOGGLE_BUTTON' ||
                      v.format === "SELECT") && (
                      <div className="text-center">
                        <h1>
                          <b>{v.label}</b>{" "}
                        </h1>
                        <h4 className="gray-opacity">{v.prompt}</h4>
                      </div>
                    )}

                    {(!v.format ||
                      v.format === "EMAIL" ||
                      v.format === "PHONE" ||
                      v.format === "SSN") &&
                    v.field_type !== "TIME" &&
                    v.field_type !== "TOGGLE_BUTTON" && (
                      <label htmlFor={v.id}>
                        {" "}
                        <b>{v.label}</b>{" "}
                      </label>
                    )}

                    {v.field_type === "TIME" && (
                      <label htmlFor={v.id}>
                        {" "}
                        <b>{v.prompt}</b>{" "}
                      </label>
                    )}

                    <MetadataInput
                      type={
                        v.field_type === "CHOICE_LIST" ? v.format : v.field_type
                      }
                      id={v.id}
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
        <button style={{display: "none"}} id="nextStep"></button>
      </form>
      <div style={{height: '200px'}}></div>
      {!!fields.length &&
      !fields.filter((f: any) => f.format === "BUTTON").length && (
        <div className="footer-controls d-flex justify-content-center align-items-center">
          <div>
            <button disabled={isLoading} className="btn btn-light btn-cyan p2 pl-5 pr-5 mr-3">
              Back
            </button>
            <button disabled={isLoading}
                    onClick={() => document.getElementById("nextStep").click()}
                    className="btn btn-danger btn-cyan p2 pl-5 pr-5">
              Next
            </button>
          </div>

          <span className="float-matters">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1"/>
            What this matters ?
          </span>
        </div>
      )}
    </div>
  );
};

export default withRouter(ExecuteCase);
