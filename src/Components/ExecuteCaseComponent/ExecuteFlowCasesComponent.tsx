import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import "./ExecuteCaseComponentExtended.scss";
import NavbarComponent from "../Shared/NavbarComponent";
import {ExecutionFlow} from "../../ExecutionFlow";
import Flow from "../../models/Flow";
import reactResponsive from 'react-responsive'

const MediaQuery = reactResponsive

const Media = {
    small: {
        minWidth: 0,
        maxWidth: "1024px"
    },
    large: {
        minWidth: "1024px",
        maxWidth: "100000px"
    }
}

const Steps = [
  {
    title: "Step 1",
    progress: 5,
  },
  {
    title: "Step 2",
    progress: 10,
  },
  {
    title: "Step 3",
    progress: 15,
  },
  {
    title: "Step 4",
    progress: 20,
  },
]

declare var window: any;
const ExecuteFlowCasesComponent = () => {
    const [progress, setProgress] = useState<number>(0);
    const [goodNewsVisible, setGoodNewsVisible] = useState<boolean>(false)
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
        <MediaQuery {...Media.small}>
          <NavbarComponent 
            showProgress 
            progress={progress}
            light={goodNewsVisible ? true : false}
          />
        </MediaQuery>
        <MediaQuery {...Media.large}>
          <NavbarComponent 
            showProgress 
            progress={progress}
            light={true}
          />
        </MediaQuery>
        <div className="hm-d-flex">
          <div className="hm-sidebar">
            {Steps.map((item) => {
              return (
                <div key={item.progress} className="hm-d-flex hm-just-center hm-align-items-center">
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
              {id && <ExecutionFlow 
                      onSubmitForm={onSubmitForm}
                      flowId={parseInt(id)}
                      goodNewsVisible={goodNewsVisible}
                      onShowGoodNews={(value) => setGoodNewsVisible(value)}
                      onChangeStep={(progress) => setProgress(progress)}
                      className="yourcase-hm-view-inner-wrapper m-auto"/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
;

export default ExecuteFlowCasesComponent;
