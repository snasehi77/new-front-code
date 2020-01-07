import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import LogoComponent from "../Shared/LogoComponent";

const FooterComponent = () => {
    const year = new Date().getFullYear();
    return <footer>
        <div className="container w-70">
            <div className="row justify-content-center ">
                <div className="col-lg-12 pt-5 pb-3">
                    <LogoComponent light styles={{width: "150px"}}/>
                </div>

                {/*<div className="col-lg-4 col-md-4 col-12 p-2">*/}
                <div className="col-md-12 col-12 p-2">
                    <p className="m-3"><FontAwesomeIcon icon={faGlobe}/><small
                        className="ml-2 color-yellow text-footer">United States
                        (EN)</small></p>
                    <p className="m-3"><FontAwesomeIcon icon={faPhone}/><small
                        className="ml-2 color-yellow text-footer">+1
                        555.401.2014</small></p>
                </div>


                {/*<div className="col-lg-4 col-md-4 col-12 p-2">*/}
                {/*    <p className="m-3"*/}
                {/*    ><NavLink to="auth" className="text-decoration-none"><small className="text-footer">YourCase Lawyer*/}
                {/*        Login</small></NavLink>*/}
                {/*    </p>*/}
                {/*    <p className="m-3"><NavLink to="/" className="text-decoration-none"><small className="text-footer">Press*/}
                {/*        Room</small></NavLink></p>*/}
                {/*</div>*/}

                {/*<div className="col-lg-4 col-md-4 col-12 p-2">*/}
                {/*    <p className="m-3"><NavLink to="/" className="text-decoration-none"><small className="text-footer">Become A*/}
                {/*        YourCase*/}
                {/*        Lawyer</small></NavLink>*/}
                {/*    </p>*/}
                {/*    <p className="m-3"><NavLink to="/" className="text-decoration-none"><small className="text-footer">Affiliate*/}
                {/*        Program</small></NavLink></p>*/}
                {/*</div>*/}

            </div>

            <hr className="mt-5 hr-white"/>

            <div className="row pt-5">

                <div className="col-lg-8 col-12">
                    <div className="row">

                        <div className="col-md-4 col-12">
                            <small className="white-opacity text-footer"><i
                                className="fa fa-copyright">&nbsp;</i>{year} Your Case Inc.</small>
                        </div>

                        <div className="col-md-4 col-12 pt-2 pt-md-0">
                            <small className="white-opacity text-footer">Members term of service</small>
                        </div>

                        <div className="col-md-4 col-12 pt-2 pt-md-0">
                            <NavLink to="/privacy_policy"><small className="white-opacity text-footer">Privacy
                                policy</small></NavLink>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-12 text-right footer-responsive pt-5 pt-md-0">
                    <i title="Instagram" className="fa fa-instagram mr-2 pointer fa-2x">&nbsp;</i>
                    <i title="Twitter" className="fa fa-twitter ml-4 mr-2 pointer fa-2x">&nbsp;</i>
                    <i title="Linkedin" className="fa fa-linkedin ml-4 pointer fa-2x">&nbsp;</i>
                </div>

            </div>

        </div>
    </footer>
};

export default FooterComponent;
