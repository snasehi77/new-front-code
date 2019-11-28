import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";

const FooterComponent = () => {
  const year = new Date().getFullYear();
  return <footer>
    <div className="container w-70">
      <div className="row justify-content-center ">
        <div className="col-lg-12 pt-5 pb-3">
          <i>
            <FontAwesomeIcon icon={faUser} className="mr-1"/>
            YourCase
          </i>
        </div>

        <div className="col-lg-4 col-12 p-2">
          <p className="m-3"><FontAwesomeIcon icon={faGlobe}/><small className="ml-2 color-yellow">United States
            (EN)</small></p>
          <p className="m-3"><FontAwesomeIcon icon={faPhone}/><small className="ml-2 color-yellow">+1
            555.401.2014</small></p>
        </div>

        <div className="col-lg-4 col-12 p-2">
          <p className="m-3"><small>YourCase Lawyer Login</small></p>
          <p className="m-3"><small>Become A YourCase Lawyer</small></p>
        </div>

        <div className="col-lg-4 col-12 p-2">
          <p className="m-3"><small>Press Room</small></p>
          <p className="m-3"><small>Affiliate Program</small></p>
        </div>

      </div>

      <hr className="mt-5 hr-white"/>

      <div className="row">

        <div className="col-lg-8 col-12">
          <div className="row">

            <div className="col-md-4 col-12">
              <small className="white-opacity"><i className="fa fa-copyright">&nbsp;</i>{year} Your Case Inc.</small>
            </div>

            <div className="col-md-4 col-12">
              <small className="white-opacity">Members term of service</small>
            </div>

            <div className="col-md-4 col-12">
              <small className="white-opacity">Privacy policy</small>
            </div>

          </div>
        </div>

        <div className="col-lg-4 col-12 text-right">
          <i title="Instagram" className="fa fa-instagram mr-2 pointer">&nbsp;</i>
          <i title="Twitter" className="fa fa-twitter mr-2 pointer">&nbsp;</i>
          <i title="Linkedin" className="fa fa-linkedin pointer">&nbsp;</i>
        </div>

      </div>

    </div>
  </footer>
};

export default FooterComponent;