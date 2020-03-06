import React from 'react';
import {flow_id} from "../../../Utils/Config";
import {NavLink} from "react-router-dom";
import mainImage from "../../../Assets/Images/woman.png"

const FrontComponentLegacy = () => {


    return (
        // <div className="content-front">
        //
        //     <LogoComponent className="your-case-logo"/>
        //
        //
        //     <div className="row m-0">
        //         <div className="col-lg-7 col-12 p-0 front-height overflow-hidden">
        //             <div className="title-padding text-left p-responsive">
        //                 <h1 className="title">What happened to you <br/> matters to us.</h1>
        //                 <p className="pb-4 color-primary-light font-graphik-regular">Find the attorney you need in minutes. Free.</p>
        //                 <NavLink to={`/execute_flow/${flow_id}`} className="btn btn-front mb-5 mb-md-0 font-graphik-medium">Get
        //                     started now</NavLink>
        //                 <img className="img-home d-block d-md-none" src={imgHome} alt=""/>
        //             </div>
        //         </div>
        //         <div className="col-lg-5 col-12 d-none d-md-block content-img-home p-0">
        //             <img className="img-home size-img-home" src={imgHome} alt=""/>
        //             <div className="content-img-home-flip">
        //                 <span className="bg-primary position-absolute vh-23 w-100" style={{bottom: "-1px"}}>{""}</span>
        //                 <div className="content-img-home-flip-green">
        //                     <img className="img-home-flip" src={imgHomeFlip} alt=""/>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        <div className="bg-front overflow-hidden">

            <div className="container pt-5">
                <div className="row pt-md-5 mt-md-5 mb-md-5 pb-md-5">
                    {/*<div className="col-12 position-to-sticky-mobile col-md-7 mt-lg-5 pt-md-5 pl-5 ml-md-0 ml-lg-5 ml-xl-0 pl-xl-3 ml-3">*/}

                    <div className="col-7">
                        <span
                            className="main-title pt-5 d-block d-md-none">What happened to <br/>you matters to us.</span>
                        <span
                            className="main-title pt-5 d-none d-md-block">What happened to you <br/>matters to us.</span>
                        <p className="pt-2 main-subtitle">Find the attorney you need in minutes. Free.</p>
                        <NavLink to={`/execute_flow/${flow_id}`}
                                 className="btn btn-front mb-5 mt-4">
                            <span>Get started now</span></NavLink>
                    </div>
                    <div className="col">
                        <img src={mainImage} className="main-image" alt="Yourcase main image"/>
                    </div>
                </div>
            </div>

            {/*<div className="container pt-5 pb-5">*/}
            {/*    <div className="row pt-5">*/}
            {/*        <div className="col-md-7">*/}
            {/*            <h1 className="main-title">What happened to you <br/> matters to us.</h1>*/}
            {/*            <p className="pt-2 main-subtitle">Find the attorney you need in minutes. Free.</p>*/}
            {/*            <NavLink to={`/execute_flow/${flow_id}`}*/}
            {/*                     className="btn btn-front mb-5 mt-4">Get*/}
            {/*                started now</NavLink>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
};

export default FrontComponentLegacy;
