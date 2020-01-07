import React from 'react';

import imgHome from '../../Assets/Images/woman.png';
import imgHomeFlip from "../../Assets/Images/image.png";
import logoGreen from "../../Assets/Images/yourcase-logo-green.png";
import {NavLink} from "react-router-dom";
import {flow_id} from "../../Utils/Config";
import LogoComponent from "../Shared/LogoComponent";

const FrontComponent = () => {
    return (
        <div className="content-front">

            <LogoComponent className="your-case-logo d-none d-sm-none d-md-block" styles={{width: "190px"}}/>

            {/*When the logo color update in the next desktop version, delete this element*/}
            <img className="your-case-logo d-sm-block d-md-none" style={{width: "190px"}} src={logoGreen} alt=""/>

            <div className="row m-0">
                <div className="col-lg-7 col-12 p-0 front-height overflow-hidden">
                    <div className="title-padding text-left p-responsive">
                        <h1 className="title color-primary">What happened to you <br/> matters to us.</h1>
                        <p className="pb-4 color-primary-light">Find the attorney you need in minutes. Free.</p>
                        <NavLink to={`/accidents_and_injuries/${flow_id}`} className="btn btn-front mb-5 mb-md-0">Get
                            started now</NavLink>
                        <img className="img-home d-block d-md-none" src={imgHome} alt=""/>
                    </div>
                </div>
                <div className="col-lg-5 col-12 d-none d-md-block content-img-home p-0">
                    <img className="img-home" src={imgHome} alt=""/>
                    <div className="content-img-home-flip">
                        <span className="bg-primary position-absolute vh-23 w-100" style={{bottom: "-1px"}}>{""}</span>
                        <div className="content-img-home-flip-green">
                            <img className="img-home-flip" src={imgHomeFlip} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FrontComponent;