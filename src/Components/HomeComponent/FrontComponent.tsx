import React from 'react';
import {NavLink} from "react-router-dom";
import {flow_id} from "../../Utils/Config";
import mainImage from '../../Assets/Images/woman.png';


const FrontComponent = () => {

    const text_header =  <div className="yc-main-hero-title pb-3"><h1
        className="main-title d-md-block">What happened to you matters&nbsp;to&nbsp;us.</h1>
        <p className="main-subtitle d-md-flex">Find the attorney you need in&nbsp;minutes.&nbsp;Free.</p>
        <NavLink to={`/execute_flow/${flow_id}`}
                 className="btn btn-front">
            <span style={{verticalAlign: "text-top"}}>Get started now</span></NavLink></div>;

    return <div className="yc-main-hero container-fluid overflow-hidden p-0">
        <div className="main-image-wrapper">
            <img className="main-image" src={mainImage} alt=""/>
        </div>
        <div className="yc-container overflow-container">
            <div className="row">
                <div className="pt-5 pb-5 pt-md-5 mt-md-5 col-12 col-md-8 d-sm-block">
                    {text_header}
                </div>
            </div>

        </div>


    </div>
};

export default FrontComponent;
