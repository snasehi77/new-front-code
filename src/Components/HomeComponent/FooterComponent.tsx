import React from 'react';
import LogoComponent from "../Shared/LogoComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


const FooterComponent = () => {
    const year = new Date().getFullYear();
    
    // putting this svg data inline is what allows for the hover effect
    // is there a way to just read the content of the files in Assets/icons?
    const svg_instagram = <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M12 2.07156C15.204 2.07156 15.584 2.08305 16.85 2.1386C20.102 2.28034 21.621 3.75811 21.769 6.84965C21.827 8.06117 21.838 8.42511 21.838 11.4937C21.838 14.5632 21.826 14.9261 21.769 16.1377C21.62 19.2263 20.105 20.707 16.85 20.8487C15.584 20.9043 15.206 20.9158 12 20.9158C8.796 20.9158 8.416 20.9043 7.151 20.8487C3.891 20.706 2.38 19.2215 2.232 16.1367C2.174 14.9252 2.162 14.5622 2.162 11.4927C2.162 8.42415 2.175 8.06117 2.232 6.84869C2.381 3.75811 3.896 2.27939 7.151 2.13764C8.417 2.08305 8.796 2.07156 12 2.07156ZM12 0C8.741 0 8.333 0.0134081 7.053 0.0689562C2.695 0.260501 0.273 2.57628 0.073 6.75388C0.014 7.98072 0 8.37147 0 11.4927C0 14.6139 0.014 15.0056 0.072 16.2315C0.272 20.4053 2.69 22.7249 7.052 22.9164C8.333 22.972 8.741 22.9854 12 22.9854C15.259 22.9854 15.668 22.972 16.948 22.9164C21.302 22.7249 23.73 20.4091 23.927 16.2315C23.986 15.0056 24 14.6139 24 11.4927C24 8.37147 23.986 7.98072 23.928 6.75483C23.732 2.5849 21.311 0.261459 16.949 0.0699139C15.668 0.0134081 15.259 0 12 0V0ZM12 5.5912C8.597 5.5912 5.838 8.23356 5.838 11.4927C5.838 14.7518 8.597 17.3952 12 17.3952C15.403 17.3952 18.162 14.7528 18.162 11.4927C18.162 8.23356 15.403 5.5912 12 5.5912ZM12 15.3236C9.791 15.3236 8 13.6093 8 11.4927C8 9.37708 9.791 7.6618 12 7.6618C14.209 7.6618 16 9.37708 16 11.4927C16 13.6093 14.209 15.3236 12 15.3236ZM18.406 3.97935C17.61 3.97935 16.965 4.59708 16.965 5.35847C16.965 6.11986 17.61 6.73759 18.406 6.73759C19.201 6.73759 19.845 6.11986 19.845 5.35847C19.845 4.59708 19.201 3.97935 18.406 3.97935Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="24" height="22.9854" fill="white"/>
            </clipPath>
        </defs>
    </svg>;

    const svg_linkedin = <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M19 0H5C2.239 0 0 2.11616 0 4.72569V17.9576C0 20.5671 2.239 22.6833 5 22.6833H19C21.762 22.6833 24 20.5671 24 17.9576V4.72569C24 2.11616 21.762 0 19 0ZM8 17.9576H5V7.5611H8V17.9576ZM6.5 6.36267C5.534 6.36267 4.75 5.61601 4.75 4.69544C4.75 3.77488 5.534 3.02822 6.5 3.02822C7.466 3.02822 8.25 3.77488 8.25 4.69544C8.25 5.61601 7.467 6.36267 6.5 6.36267ZM20 17.9576H17V12.6611C17 9.47784 13 9.71885 13 12.6611V17.9576H10V7.5611H13V9.22927C14.396 6.78514 20 6.60462 20 11.5694V17.9576Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="24" height="22.6833" fill="white"/>
            </clipPath>
        </defs>
    </svg>;

    const svg_twitter = <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M24 4.36434C23.117 4.73977 22.168 4.99261 21.172 5.10658C22.189 4.52332 22.97 3.59912 23.337 2.49774C22.386 3.03789 21.332 3.43056 20.21 3.64222C19.313 2.72567 18.032 2.15295 16.616 2.15295C13.437 2.15295 11.101 4.99357 11.819 7.9424C7.728 7.74607 4.1 5.86893 1.671 3.01586C0.381 5.13531 1.002 7.90792 3.194 9.31195C2.388 9.28705 1.628 9.07539 0.965 8.72199C0.911 10.9066 2.546 12.9503 4.914 13.4053C4.221 13.5853 3.462 13.6275 2.69 13.4857C3.316 15.359 5.134 16.7219 7.29 16.7602C5.22 18.3146 2.612 19.0089 0 18.7139C2.179 20.0519 4.768 20.8324 7.548 20.8324C16.69 20.8324 21.855 13.4378 21.543 6.80558C22.505 6.13996 23.34 5.30962 24 4.36434Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="24" height="22.9854" fill="white"/>
            </clipPath>
        </defs>
    </svg>;
    

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
                        {svg_instagram}
                    </a>
                    <a href="https://twitter.com/yourcasecom/" target={'_blank'}>
                        {svg_twitter}                        
                    </a>
                    <a href="https://www.linkedin.com/company/yourcasematters/about/" target={'_blank'}>
                        {svg_linkedin}
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
