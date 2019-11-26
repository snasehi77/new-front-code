import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {getAllChoiceList, getExecute} from "../../Services";
import {FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft, faStepForward} from '@fortawesome/free-solid-svg-icons'
import {toMap} from "../../Utils/Utilities";
import MetadataInput from "../../Shared/MetadataInputComponent/MetadataInput";
import {NavLink} from "react-router-dom";

declare var document: any;

const ExecutionFlow = ({match}: any) => {

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
      let map = toMap(res.items, 'id');
      setChoiceListMap(map);
    })
  }, [match]);

  useEffect(() => {
    if (id) {
      getExecute(id)
        .then((res: any) => {
          setData(res);
          setLoading(false);
          if (res.success) {
            setQuestion({value: res.item.current_step.views[0] ? res.item.current_step.views[0] : [], index: 0});
          } else {
            setQuestion({value: [], index: 0});
          }
        })
    }
  }, [id]);

  useEffect(() => {
    if (currentQuestion.value.fields) {
      setFields(currentQuestion.value.fields)
    }
  }, [currentQuestion]);

  useEffect(() => {
    console.log(info);
  }, [info]);

  function nextQuestion(event: any) {
    event.preventDefault();
    const mapField: any = toMap(fields, 'id');
    let resultFields: Array<any> = [];
    Object.keys(info).forEach(f => {
      resultFields.push({
        id: parseInt(f),
        view_id: mapField[f].view_id,
        name: mapField[f].name,
        value: info[f],
        choice_list_value_id: (mapField[f].format === 'RADIO_BUTTON'
          || mapField[f].format === 'BUTTON' || mapField[f].format === 'SELECT') ? ("" + info[f]) : null
      })
    });
    const resultData = {
      step_id: currentQuestion.value.step_id,
      fields: resultFields
    };
    console.log(JSON.stringify(resultData))
  }


  return (
    <>
      <NavLink className="m-2 btn  btn-info"  to="/">
        <FontAwesomeIcon  icon={faArrowAltCircleLeft} />
      </NavLink>
      {data.item && !isLoading && <h2 className="text-center">
        {data.item.current_step.name}
      </h2>}

      {!fields.length && !isLoading && <div className="text-center p-5 m-5">
        <h1>no results</h1>
      </div>}

      {isLoading && <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
      <form onSubmit={(event => nextQuestion(event))}>
        {currentQuestion.value.fields && <div className="w-50 m-auto">
          {fields.map((v: any, i: any) => {
            return <div key={i} className="form-group">

              {(v.format === 'BUTTON' || v.format === 'RADIO_BUTTON' || v.format === 'SELECT') &&
              <div className="text-center">
                <h3><label htmlFor={v.id}> <b>{v.label}</b> </label></h3>
                <p className="gray-opacity">{v.prompt}</p>
              </div>}

              {((!v.format || v.format === 'EMAIL' || v.format === 'PHONE' || v.format === 'SSN') && v.field_type !== 'TIME') &&
              <label htmlFor={v.id}> <b>{v.label}</b> </label>}

              {v.field_type === 'TIME' && <label htmlFor={v.id}> <b>{v.prompt}</b> </label>}

              <MetadataInput
                type={v.field_type === 'CHOICE_LIST' ? v.format : v.field_type}
                id={v.id}
                placeholder={v.prompt}
                childType={v.format}
                onChange={(value: any) => setInfo({...info, [v.id]: value})}
                singleValue={v.single_value}
                listOptions={choiceListMap[v.choice_list_id] ? choiceListMap[v.choice_list_id].values : []}
              />
            </div>
          })}
        </div>}
        <button style={{display: 'none'}} id="nextStep">_</button>
      </form>

      {!!fields.length && !fields.filter((f: any) => f.format === 'BUTTON').length &&
      <div className="container m-5 pt-3">
        <div className="row justify-content-end text-center">
          <div className="col-4">
            <button onClick={() => document.getElementById('nextStep').click()} className="btn btn-info btn-cyan">
              Next
              <FontAwesomeIcon icon={faStepForward} className="ml-1"/>
            </button>
          </div>
        </div>
      </div>}
    </>
  )
};

export default withRouter(ExecutionFlow);
