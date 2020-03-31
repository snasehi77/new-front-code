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
        <div className="yc-container">
            <div className="row">
                <div className="col-lg-12 pt-5 pb-3">
                    <LogoComponent light styles={{width: "150px"}}/>
                </div>
            </div>

            <div className="footer-links row pt-5">
                <div className="col-12 col-lg-4">
                    <NavLink to="/become-a-yourcase-lawyer"><p className="text-footer mb-4">Become A YourCase Lawyer</p></NavLink>
                    {/* <p className="text-footer mb-3" style={{display: "none"}}>Press Room</p> */}
                </div>

                <div className="col-12 col-lg-4">
                    <NavLink to="/yourcase-lawyer-login"><p className="text-footer mb-4">YourCase Lawyer Login</p></NavLink>                    
                </div>
                <div className="col-12 col-lg-4">
                    <NavLink to="/affiliate-program"><p className="text-footer">Affiliate Program</p></NavLink>
                </div>
            </div>

            <hr className="mt-5 mb-5 hr-white"/>

            <div className="footer-row clearfix">
                <div className="social-media-icons clearfix">
                    <a href="https://www.instagram.com/your_case_matters/" target={'_blank'}>
                        <img className="pointer" src={instagram} style={{objectFit: "contain"}} alt=""/>
                    </a>
                    <a href="https://twitter.com/yourcasecom/" target={'_blank'}>
                        <img className="pointer" src={twiter} style={{objectFit: "contain"}} alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/company/yourcasematters/about/" target={'_blank'}>
                        <img className="pointer" src={linkedin} style={{objectFit: "contain"}} alt=""/>
                    </a>
                </div>
                <div className="small-print">
                    <div className="mb-3 mb-lg-0">
                        <span className="text-footer-bottom"><i className="fa fa-copyright">&nbsp;</i>{year} YourCase.com, LLC</span>
                    </div>

                    <div className="mb-3 mb-lg-0">
                        <NavLink to="/member-terms-of-service"><span className="text-footer-bottom">Member terms of service</span></NavLink>
                    </div>

                    <div className="mb-3 mb-lg-0">
                        <NavLink to="/privacy_policy"><span className="text-footer-bottom">Privacy policy</span></NavLink>
                    </div>
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
