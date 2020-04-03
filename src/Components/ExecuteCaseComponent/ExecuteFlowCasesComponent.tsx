import React from 'react';
import {useParams} from 'react-router-dom';
import "./ExecuteCaseComponent.scss";
import {NavbarBrand} from "reactstrap";
import logo from "../../Assets/Images/yourcase-logo-green.png";
import {ExecutionFlow} from "execution-flow";

const ExecuteFlowCasesComponent = () => {
    const {id} = useParams();


    return (
      <div className="vh-100">
        <NavbarBrand style={{height: "5%"}} href="/" className="mr-auto">
          {/*<LogoComponent className="your-case-logo my-auto ml-4 pt-md-3 ml-md-4"/>*/}
          <img className="your-case-logo my-auto ml-2 pt-md-3 ml-md-2" src={logo} alt="logo"/>
        </NavbarBrand>
        <div style={{height: "94%"}}>
          {id && <ExecutionFlow flowId={parseInt(id)}
                                className="col-xl-4 col-lg-8 col-md-10 col-12 m-auto"/>}
        </div>
      </div>
    )
  }
;

export default ExecuteFlowCasesComponent;
