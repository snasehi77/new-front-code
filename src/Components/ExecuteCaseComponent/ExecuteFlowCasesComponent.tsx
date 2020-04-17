import React from 'react';
import {useParams} from 'react-router-dom';
import "./ExecuteCaseComponent.scss";
import NavbarComponent from "../Shared/NavbarComponent";
import {ExecutionFlow} from "execution-flow";
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
        <div className="hm-view">
          {id && <ExecutionFlow onSubmitForm={onSubmitForm}
                                flowId={parseInt(id)}
                                className="col-xl-6 col-lg-8 col-md-10 col-12 m-auto"/>}
        </div>
      </div>
    )
  }
;

export default ExecuteFlowCasesComponent;
