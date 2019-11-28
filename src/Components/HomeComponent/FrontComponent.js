import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import imgHome from '../../Assets/Images/woman.png';

const FrontComponent = () => {
  return (
    <div className="content-front">
      <h4 className="your-case-logo font-weight-bold">
        <FontAwesomeIcon icon={faUser} className="mr-1"/>
        YourCase
      </h4>

      <div className="row relative-size  m-0">
        <div className="col-lg-7 col-12 d-flex  justify-content-center">
          <div className="ptp-20 pbp-20">
            <h1 className="title">What happened to you <br/> matters to us.</h1>
            <p className="subtitle">Find the attorney need in minutes. Free.</p>
            <button className="btn btn-danger">Get started now</button>

          </div>

        </div>
        <div className="col-lg-5 col-12 p-0 content-img-home">
          <img className="img-home" src={imgHome} alt=""/>
        </div>
      </div>
    </div>
  )
};

export default FrontComponent;