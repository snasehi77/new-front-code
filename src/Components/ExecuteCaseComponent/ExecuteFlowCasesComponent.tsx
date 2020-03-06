import React from 'react';
import {useParams} from 'react-router-dom';
import ExecutionFlow from "execution-flow";
import {baseUrl} from "../../Utils/Config";
import LogoComponent from "../Shared/LogoComponent";
import history from "../../Utils/History";
import "./ExecuteCaseComponent.scss";

const ExecuteFlowCasesComponent = () => {
    const {id} = useParams();


    return (
      <>
        <LogoComponent onClick={() => {
          history.push("/");
        }} className="m-4" styles={{width: "200px"}}/>
        {id && <ExecutionFlow flowId={parseInt(id)}
                              url={baseUrl}
                              className="col-xl-4 col-lg-6 col-md-8 col-12 m-auto"/>}
      </>
    )
  }
;

export default ExecuteFlowCasesComponent;
