import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
// import "./ExecuteCaseComponent.scss";
import "./ExecuteCaseComponentExtended.scss";
import NavbarComponent from "../Shared/NavbarComponent";
import {ExecutionFlow} from "../../ExecutionFlow";
import Flow from "../../models/Flow";

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
        <NavbarComponent showProgress progress={progress} />
        <div id="yourcase-hm-view">
          {id && <ExecutionFlow onSubmitForm={onSubmitForm}
                                flowId={parseInt(id)}
                                onChangeStep={(data) => setProgress(Math.min(data.length * 10, 100))}
                                className="yourcase-hm-view-inner-wrapper m-auto"/>}
        </div>
      </div>
    )
  }
;

export default ExecuteFlowCasesComponent;
