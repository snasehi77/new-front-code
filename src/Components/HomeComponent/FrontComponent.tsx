import React from 'react';
import {NavLink} from "react-router-dom";
import {flow_id} from "../../Utils/Config";
import mainImage from '../../Assets/Images/woman.png';


const FrontComponent = () => {

    return <div className="container-fluid bg-front overflow-hidden mt-5 p-0 pt-5 mt-md-0 pt-md-0  custom-container">
        <div className="container overflow-container">
            <div className="row">
                <div className="pt-3 pl-5 pt-md-5 mt-md-5 col-12 col-md-8">
                <span
                    className="main-title d-block d-md-none">What happened to you matters to us.</span>
                    <span
                        className="main-title d-none d-md-block pt-5 mt-md-0 pt-5 mt-md-0  pt-lg-5 mt-lg-5 ">What happened to you <br/>matters to us.</span>
                    <p className="main-subtitle d-none d-md-flex">Find the attorney you need in minutes. Free.</p>
                    <p className="main-subtitle d-flex d-md-none pt-4 pb-2 pt-md-0 pb-md-0">Find the attorney you need <br/>in minutes. Free.</p>
                    <NavLink to={`/accidents_and_injuries/${flow_id}`}
                             className="btn btn-front">
                        <span style={{verticalAlign: "text-top"}}>Get started now</span></NavLink>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <img className="main-image" src={mainImage} alt=""/>
                </div>
                <div className="col-4 d-block  d-md-none">
                    <img className="main-image-mobile" src={mainImage} alt=""/>
                </div>
            </div>
        </div>
    </div>
};

export default FrontComponent;