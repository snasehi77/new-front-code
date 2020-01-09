import React, {useState} from 'react';
import LogoComponent from "../Shared/LogoComponent";
import mainImage from "../../Assets/Images/woman.png";
import {flow_id} from "../../Utils/Config";
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

const FrontComponent = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

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
        //                 <NavLink to={`/accidents_and_injuries/${flow_id}`} className="btn btn-front mb-5 mb-md-0 font-graphik-medium">Get
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


            <div className="container-fluid bg-front navbar-sticky">
                <div className="row pt-md-3">
                    <LogoComponent className="your-case-logo my-auto ml-4 pt-md-3 ml-md-4"/>

                    <Navbar color="faded" className="ml-auto" light>
                        <NavbarToggler onClick={toggleNavbar} className="mr-2 d-block d-sm-none" style={{border: '0'}}/>
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                </NavItem>
                                <NavItem>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>


            <div className="container d-flex p-0" style={{marginBottom: '-3rem'}}>
                <div className="row">
                    <div className="col-12 position-to-sticky-mobile col-md-7 mt-lg-5 pt-md-5 pl-5 ml-md-0 ml-lg-5 ml-xl-0 pl-xl-3 ml-3">
                        <div className="row d-block pb-4 pt-md-5 mt-md-0">
                            <span className="main-title pt-5 d-block d-md-none">What happened to <br/>you matters to us.</span>
                            <span className="main-title pt-5 d-none d-md-block">What happened to you <br/>matters to us.</span>
                            <p className="pt-2 main-subtitle">Find the attorney you need in minutes. Free.</p>
                            <NavLink to={`/accidents_and_injuries/${flow_id}`}
                                     className="btn btn-front mb-5 mt-4">
                                <span>Get started now</span></NavLink>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={mainImage} className="main-image" alt="Yourcase main image"/>
                    </div>
                </div>
            </div>

            {/*<div className="container pt-5 pb-5">*/}
            {/*    <div className="row pt-5">*/}
            {/*        <div className="col-md-7">*/}
            {/*            <h1 className="main-title">What happened to you <br/> matters to us.</h1>*/}
            {/*            <p className="pt-2 main-subtitle">Find the attorney you need in minutes. Free.</p>*/}
            {/*            <NavLink to={`/accidents_and_injuries/${flow_id}`}*/}
            {/*                     className="btn btn-front mb-5 mt-4">Get*/}
            {/*                started now</NavLink>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
};

export default FrontComponent;