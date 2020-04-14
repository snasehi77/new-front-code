import React from 'react';
import {useParams} from 'react-router-dom';
import "./ExecuteCaseComponent.scss";
import NavbarComponent from "../Shared/NavbarComponent";
import {ExecutionFlow} from "execution-flow";
import Flow from "../../models/Flow";
declare var window:any;
const ExecuteFlowCasesComponent = () => {
    const {id} = useParams();
    const onSubmitForm = (flow: Flow, formData: any) => {
      console.log(flow.name)
      window.dataLayer.push({'event' : 'formSubmitted', 'formName' : flow.name})
    }

    return (
      <div className="vh-100">
        <NavbarComponent/>
        <div className="hm-view">
          {id && <ExecutionFlow onSubmitForm={onSubmitForm} flowId={parseInt(id)}
                                className="col-xl-4 col-lg-8 col-md-10 col-12 m-auto"/>}
        </div>
      </div>
    )
  }
;

export default ExecuteFlowCasesComponent;
