import React from 'react';
import LogoComponent from "../Shared/LogoComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import linkedin from "../../Assets/icons/linkedin.png"
import instagram from "../../Assets/icons/instagram.png"
import twiter from "../../Assets/icons/twitter.png"

const FooterComponent = () => {
    const year = new Date().getFullYear();
    return <footer>
        <div className="container m-0 ml-4 mx-lg-auto w-70">
            <div className="row">
                <div className="col-lg-12 pt-5 pb-3">
                    <LogoComponent light styles={{width: "150px"}}/>
                </div>
            </div>

            <div className="row justify-content-center pt-5">
                <div className="col-12 col-lg">
                    <p><FontAwesomeIcon icon={faGlobe}/><span
                        className="ml-2 ml-md-4 text-footer-location">United States
                        (EN)</span></p>
                    <p><FontAwesomeIcon icon={faPhone}/><span
                        className="ml-2 ml-md-4 text-footer-location">+1
                        555.401.2014</span></p>
                </div>

                <div className="col-12 col-lg pt-5 pt-lg-0">
                    <p className="text-footer">YourCase Lawyer Login</p>
                    <p className="text-footer">Press Room</p>
                </div>

                <div className="col-12 col-lg p-lg-0">
                    <p className="text-footer">Become A YourCase Lawyer</p>
                    <p className="text-footer">Affiliate Program</p>
                </div>
            </div>

            <hr className="mt-5 hr-white"/>

            <div className="row pt-5">

                <div className="col-md-3 p-0 d-flex d-lg-none">
                    {/*<i title="Instagram" className="fa fa-instagram mr-2 pointer fa-2x footer-icon-size">&nbsp;</i>*/}
                    {/*<i title="Twitter" className="fa fa-twitter ml-4 mr-2 pointer fa-2x footer-icon-size">&nbsp;</i>*/}
                    {/*<i title="Linkedin" className="fa fa-linkedin-square ml-4 pointer fa-2x footer-icon-size">&nbsp;</i>*/}
                    <img className="ml-3 pointer" src={instagram} alt=""/>
                    <img className="ml-4 pl-3 pointer" src={twiter} alt=""/>
                    <img className="ml-4 pl-3 pointer" src={linkedin} alt=""/>
                </div>

                <div className="col-lg-3 col-12 pt-5 pt-lg-0">
                            <span className="text-footer-bottom"><i
                                className="fa fa-copyright">&nbsp;</i>{year} Your Case Inc.</span>
                </div>

                <div className="col-lg-3 col-12 pt-3 pt-lg-0 p-lg-0">
                    <NavLink to="/member-terms-of-service"><span className="text-footer-bottom">Member terms of service</span></NavLink>
                </div>

                <div className="col-lg-3 col-12  pt-3 pt-lg-0 p-lg-0">
                    <NavLink to="/privacy_policy"><span className="text-footer-bottom">Privacy
                                policy</span></NavLink>
                </div>

                <div className="col-md-3 d-none d-lg-flex">
                    {/*<i title="Instagram" className="fa fa-instagram mr-2 pointer fa-2x footer-icon-size">&nbsp;</i>*/}
                    {/*<i title="Twitter" className="fa fa-twitter ml-4 mr-2 pointer fa-2x footer-icon-size">&nbsp;</i>*/}
                    {/*<i title="Linkedin" className="fa fa-linkedin-square ml-4 pointer fa-2x footer-icon-size">&nbsp;</i>*/}
                    <img className="mr-2 pointer" src={instagram} style={{objectFit: "contain"}} alt=""/>
                    <img className="ml-4 mr-2 pointer" src={twiter} style={{objectFit: "contain"}} alt=""/>
                    <img className="ml-4 pointer" src={linkedin} style={{objectFit: "contain"}} alt=""/>
                </div>
            </div>

            {/*<div className="col-lg-4 col-12 text-right pt-5 pt-md-0">*/}
            {/*    <i title="Instagram" className="fa fa-instagram mr-2 pointer fa-2x">&nbsp;</i>*/}
            {/*    <i title="Twitter" className="fa fa-twitter ml-4 mr-2 pointer fa-2x">&nbsp;</i>*/}
            {/*    <i title="Linkedin" className="fa fa-linkedin-square ml-4 pointer fa-2x">&nbsp;</i>*/}
            {/*</div>*/}


        </div>
    </footer>
};

export default FooterComponent;
