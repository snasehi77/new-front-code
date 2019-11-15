import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import imgHome from '../../Assets/Images/23e77c1b8724b25ec34af027ae419a26.png';

const FrontComponent = () => {
  return (
    <div className="content-front">
      <i className="your-case-logo">
        <FontAwesomeIcon icon={faUser} className="mr-1"/>
        YourCase
      </i>

      <div className="row relative-size  m-0">
        <div className="col-lg-7 col-12 d-flex align-items-center justify-content-center">
          <div className="p-5">
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