import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {MRRESET_ENGINE} from "../../Utils/Config";
import mainImage from '../../Assets/Images/woman.png';

import { useLocation} from "react-router";

const FrontComponentCase = (props) => {

    const localtion = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0)
    });

    return <div className="container-fluid bg-front overflow-hidden mt-5 p-0 pt-5 mt-md-0 pt-md-0 ">
      <div className="row m-0 justify-content-end">
        <div className="d-block d-md-none">
          <img className="main-image-mobile" src={mainImage} alt=""/>
        </div>
      </div>
      <div className="container overflow-container">
            <div className="row">
                <div className="pt-3 pl-5 pt-md-5 mt-md-5 col-12 col-md-8">
                    <span
                        className="main-title d-md-block pt-5 mt-md-0 pt-5 mt-md-0  pt-lg-5 mt-lg-5 ">What happened<br/>to you matters<br/>to us.</span>
                    <p className="main-subtitle d-none d-md-flex">Find the attorney you need in minutes. Free.</p>
                    <p className="main-subtitle d-flex d-md-none pt-3 pb-1 pt-md-0 pb-md-0">Find the attorney you
                        need <br/>in minutes. Free.</p>
                    <a href={'#' + props.buttonLink}
                             className="btn btn-front">
                        <span style={{verticalAlign: "text-top"}}>Get started now</span></a>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <img className="main-image" src={mainImage} alt=""/>
                </div>
                {/*<div className="col-4 d-block  d-md-none">*/}
                {/*    <img className="main-image-mobile" src={mainImage} alt=""/>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>
};

export default FrontComponentCase;
