import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import linkedinIcon from '../../../Assets/icons/linkedin-icon.png';
import LogoComponent from "../../Shared/LogoComponent";

const FooterComponentLegacy = () => {
    const year = new Date().getFullYear();
    return <footer>
        <div className="container w-70">
            <div className="row justify-content-center ">
                <div className="col-lg-12 pt-5 pb-3">
                    <LogoComponent light styles={{width: "150px"}}/>
                </div>

                {/*<div className="col-lg-4 col-md-4 col-12 p-2">*/}
                <div className="col-md-12 col-12 p-2">
                    <p className="m-3"><FontAwesomeIcon icon={faGlobe}/><span
                        className="ml-2 text-footer-location">United States
                        (EN)</span></p>
                    <p className="m-3"><FontAwesomeIcon icon={faPhone}/><span
                        className="ml-2 text-footer-location">+1
                        555.401.2014</span></p>
                </div>


                <div className="col-lg-4 col-md-4 col-12 p-2">
                    <p className="m-3"
                    ><NavLink to="auth" className="text-decoration-none"><small className="text-footer">YourCase Lawyer
                        Login</small></NavLink>
                    </p>
                    <p className="m-3"><NavLink to="/" className="text-decoration-none"><small className="text-footer">Press
                        Room</small></NavLink></p>
                </div>

                <div className="col-lg-4 col-md-4 col-12 p-2">
                    <p className="m-3"><NavLink to="/" className="text-decoration-none"><small className="text-footer">Become A
                        YourCase
                        Lawyer</small></NavLink>
                    </p>
                    <p className="m-3"><NavLink to="/" className="text-decoration-none"><small className="text-footer">Affiliate
                        Program</small></NavLink></p>
                </div>

            </div>

            <hr className="mt-5 hr-white"/>

            <div className="row pt-5">

                <div className="col-lg-8 col-12">
                    <div className="row">

                        <div className="col-md-4 col-12">
                            <span className="text-footer-bottom"><i
                                className="fa fa-copyright">&nbsp;</i>{year} Your Case Inc.</span>
                        </div>

                        <div className="col-md-4 col-12 pt-2 pt-md-0">
                            <span className="text-footer-bottom">Members term of service</span>
                        </div>

                        <div className="col-md-4 col-12 pt-2 pt-md-0">
                            <NavLink to="/privacy_policy"><span className="text-footer-bottom">Privacy
                                policy</span></NavLink>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-12 text-right footer-responsive pt-5 pt-md-0">
                    <i title="Instagram" className="fa fa-instagram mr-2 pointer fa-2x">&nbsp;</i>
                    <i title="Twitter" className="fa fa-twitter ml-4 mr-2 pointer fa-2x">&nbsp;</i>
                    <i title="Linkedin" className="fa fa-linkedin-square ml-4 pointer fa-2x">&nbsp;</i>
                </div>

            </div>

        </div>
    </footer>
};

export default FooterComponentLegacy;
