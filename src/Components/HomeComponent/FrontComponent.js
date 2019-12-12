import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import imgHome from '../../Assets/Images/woman.png';

const FrontComponent = () => {
  return (
    <div className="content-front vh-100">
      <h4 className="your-case-logo font-weight-bold">
        <FontAwesomeIcon icon={faUser} className="mr-1"/>
        YourCase
      </h4>

      <img className="img-home" src={imgHome} alt=""/>

      <div className="row m-0">
        <div className="col-lg-7 d-flex justify-content-center">
          <div className="ptp-20 text-left">
            <h1 className="title">What happened to you <br/> matters to us.</h1>
            <p className="subtitle">Find the attorney need in minutes. Free.</p>
            <button className="btn btn-danger">Get started now</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default FrontComponent;