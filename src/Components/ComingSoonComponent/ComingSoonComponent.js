import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import imgHome from "../../Assets/Images/woman.png";
import "./ComingSoonComponent.scss";

const ComingSoonComponent = () => {
  return (
    <div className="content-front vh-100">
      <h4 className="your-case-logo font-weight-bold">
        <FontAwesomeIcon icon={faUser} className="mr-1"/>
        YourCase
      </h4>

      <img className="img-home" src={imgHome} alt=""/>

      <div className="row m-0">
        <div className="col-lg-12">
          <div className="ptp-10 text-center">
            <h1 className="title font-weight-bold">hey everybody! <br/> we're coming soon...</h1>
            <p className="subtitle font-weight-bolder">We're coming soon! Awesome template to tell us your cases. <br/>
              We're working hard to give you the best experience.</p>
          </div>

        </div>
        <div className="col-lg-12 ptp-10 d-flex justify-content-center">

          <a className="circle-item pointer-event text-decoration-none">
            <i title="Instagram" className="fa fa-instagram">{}</i>
          </a>
          <a className="circle-item pointer-event text-decoration-none">
            <i title="Twitter" className="fa fa-twitter">{}</i>
          </a>
          <a className="circle-item pointer-event text-decoration-none">
            <i title="Linkedin" className="fa fa-linkedin">{}</i>
          </a>

        </div>
      </div>
    </div>
  )
};


export default ComingSoonComponent;