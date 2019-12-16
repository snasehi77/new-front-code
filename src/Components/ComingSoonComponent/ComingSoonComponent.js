import React from 'react';
import "./ComingSoonComponent.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const ComingSoonComponent = () => {

  const year = new Date().getFullYear();
  return (
    <div className="bg-primary vh-100 bkg-p-auto d-flex align-items-center">

      <h4 className="your-case-logo font-weight-bold cl-white">
        <FontAwesomeIcon icon={faUser} className="mr-1"/>
        YourCase
      </h4>

      <p className="bkg-coming-soon p-0 m-0">Coming Soon.</p>

      <p className="bkg-inc">
        <small className="white-opacity">
          <i className="fa fa-copyright">&nbsp;</i>{year} Your Case Inc.
        </small>
      </p>
    </div>
  )
};


export default ComingSoonComponent;