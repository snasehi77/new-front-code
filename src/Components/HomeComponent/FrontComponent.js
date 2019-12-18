import React from 'react';

import imgHome from '../../Assets/Images/woman.png';
import LogoComponent from "../Shared/LogoComponent";

const FrontComponent = () => {
  return (
    <div className="content-front">

      <LogoComponent className="your-case-logo"/>

      <div className="row m-0">
        <div className="col-lg-7 col-md-6 col-12 p-2">
          <div className="ptp-20 text-left p-responsive">
            <h1 className="title">What happened to you <br/> matters to us.</h1>
            <p className="subtitle pb-4">Find the attorney need in minutes. Free.</p>
            <button className="btn btn-danger">Get started now</button>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-12 content-img-home">
          <img className="img-home" src={imgHome} alt=""/>
        </div>
      </div>
    </div>
  )
};

export default FrontComponent;