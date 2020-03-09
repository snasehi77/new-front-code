import React from 'react';
import {NavLink} from "react-router-dom";
import {flow_id} from "../../Utils/Config";
import mainImage from '../../Assets/Images/woman.png';


const FrontComponent = () => {

    const text_header =  <div><span
        className="main-title d-md-block pt-5 mt-md-0 pt-5 mt-md-0  pt-lg-5 mt-lg-5 ">What happened<br className={'br-xs'}/> to you<br className={'br-lg'}/> matters<br className={'br-xs'}/> to us.</span>
        <p className="main-subtitle d-none d-md-flex">Find the attorney you need in minutes. Free.</p>
        <p className="main-subtitle d-flex d-md-none pt-3 pb-1 pt-md-0 pb-md-0">Find the attorney you
            need <br/>in minutes. Free.</p>
        <NavLink to={`/execute_flow/${flow_id}`}
                 className="btn btn-front">
            <span style={{verticalAlign: "text-top"}}>Get started now</span></NavLink></div>;

    return <div className="container-fluid bg-front overflow-hidden mt-5 p-0 pt-5 mt-md-0 pt-md-0 ">
        <div className="container overflow-container">
            <div className="row">
                <div className="pt-3 pl-5 pt-md-5 mt-md-5 col-12 col-md-8 d-none d-sm-block">
                    {text_header}
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <img className="main-image" src={mainImage} alt=""/>
                </div>
                {/*<div className="col-4 d-block  d-md-none">*/}
                {/*    <img className="main-image-mobile" src={mainImage} alt=""/>*/}
                {/*</div>*/}
            </div>
        </div>
        <div className="row m-0 justify-content-end">
            <div className="d-block d-md-none">
                <img className="main-image-mobile" src={mainImage} alt=""/>
            </div>
            <div className="pt-5 pb-4 pl-4 col-12 col-md-8 d-block d-sm-none bg-white">
                {text_header}
            </div>
        </div>

    </div>
};

export default FrontComponent;
