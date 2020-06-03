import React from 'react';
import {useParams} from 'react-router-dom';
// import "./ExecuteCaseComponent.scss";
import "./ExecuteCaseComponentExtended.scss";
import NavbarComponent from "../Shared/NavbarComponent";
import {ExecutionFlow} from "../../ExecutionFlow";
import Flow from "../../models/Flow";

declare var window: any;
const ExecuteFlowCasesComponent = () => {
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
        <NavbarComponent/>
        <div id="yourcase-hm-view">
          {id && <ExecutionFlow onSubmitForm={onSubmitForm}
                                flowId={parseInt(id)}
                                className="yourcase-hm-view-inner-wrapper m-auto"/>}
        </div>
      </div>
    )
  }
;

export default ExecuteFlowCasesComponent;
