import React from 'react';
import {useParams} from 'react-router-dom';
import {ExecutionFlow} from "execution-flow";
import {baseUrl} from "../../Utils/Config";
import "./ExecuteCaseComponent.scss";
import {NavbarBrand} from "reactstrap";
import logo from "../../Assets/Images/yourcase-logo-green.png";

const ExecuteFlowCasesComponent = () => {
    const {id} = useParams();


    return (
      <>
        <NavbarBrand href="/" className="mr-auto">
          {/*<LogoComponent className="your-case-logo my-auto ml-4 pt-md-3 ml-md-4"/>*/}
          <img  className="your-case-logo my-auto ml-2 pt-md-3 ml-md-2" src={logo} alt="logo"/>
        </NavbarBrand>
        {id && <ExecutionFlow flowId={parseInt(id)}
                              className="col-xl-4 col-lg-6 col-md-8 col-12 m-auto"/>}
      </>
    )
  }
;

export default ExecuteFlowCasesComponent;
