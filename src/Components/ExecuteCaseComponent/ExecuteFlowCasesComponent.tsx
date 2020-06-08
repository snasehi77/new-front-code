import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import "./ExecuteCaseComponentExtended.scss";
import NavbarComponent from "../Shared/NavbarComponent";
import {ExecutionFlow} from "../../ExecutionFlow";
import Flow from "../../models/Flow";

const Steps = [ //TODO:
  {
    title: "Step 1",
    progress: 10,
  },
  {
    title: "Step 2",
    progress: 20,
  },
  {
    title: "Step 3",
    progress: 30,
  },
  {
    title: "Step 4",
    progress: 40,
  },
  {
    title: "Step 5",
    progress: 50,
  },
  {
    title: "Step 6",
    progress: 60,
  },
  {
    title: "Step 6",
    progress: 70,
  }
]

declare var window: any;
const ExecuteFlowCasesComponent = () => {
    const [progress, setProgress] = useState<number>(0);
    const {id} = useParams();
    const onSubmitForm = (flow: Flow, formData: any, stepName: string) => {
      const injuredField = formData.find((i: any) => i.name === 'multiple choice - one answer_4');
      const paramsGTM: any = {'event': 'formSubmitted', 'Form Name': stepName};
      if (injuredField) {
        paramsGTM['Form Type'] = injuredField.value;
      }
      window.dataLayer.push(paramsGTM);
    }

    return (
      <div className="vh-100">
        <NavbarComponent 
          showProgress 
          progress={progress}
          light={false}
        />
        <div className="hm-d-flex">
          <div className="hm-sidebar">
            {Steps.map((item) => {
              return (
                <div className="hm-d-flex hm-just-center hm-align-items-center">
                  <div className={"hm-bar" + (item.progress === progress ? " hm-bar-selected" : "")} />
                  <div className={"hm-bar-text" + (item.progress === progress ? " hm-bar-text-selected" : "")}>
                    {item.title}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="hm-flow">
            <div id="yourcase-hm-view">
              {id && <ExecutionFlow onSubmitForm={onSubmitForm}
                                    flowId={parseInt(id)}
                                    onChangeStep={(data) => setProgress(Math.min(data.length * 10, 100))}
                                    className="yourcase-hm-view-inner-wrapper m-auto"/>}
            </div>
          </div>

        </div>
      </div>
    )
  }
;

export default ExecuteFlowCasesComponent;
