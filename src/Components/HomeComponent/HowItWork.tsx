import React from 'react';
import {steps} from "../../Utils/Utilities";
import imgSteps from '../../Assets/Images/man2.png'


const HowItWork = () => {
    return <div className="container-fluid">
        <div className="row m-0">
            <div className="container mt-5 mt-md-0 w-80 ptp-10 pbp-10 content-steps">
                <hr className="hr-primary" style={{width: "100px"}}/>
                <h1 className="text-center  how-it-works-title pt-4 mb-5">Here´s how it works</h1>
                <div className="row mb-5 pt-5 justify-content-center">
                    {steps.map(s => {
                        return (
                            <div key={s.num} className="col-lg-4 col-md-6 col-12">
                                <h1 className={`how-it-works-num text-center ${s.num === '1' ? "" : "mt-5 mt-md-0"}`}>{s.num}</h1>
                                <p className="how-it-works-title-num text-center mb-0"> {s.title}</p>
                                <p className="how-it-works-description-num text-center pt-2">{s.p1}<br/>{s.p2 && s.p2}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/*<div className="container">*/}
        {/*    <div className="row justify-content-center align-items-center">*/}
        {/*        <div className="col-10 col-sm-2 p-0 d-sm-none">*/}
        {/*            <img className="img-fluid" style={{background: '#E5E5E5'}} src={imgSteps} alt=""/>*/}
        {/*        </div>*/}
        {/*        <div className="col-12 col-sm-8 col-md-8 blue-temp col-lg-8 container-height-steps">*/}
        {/*            <div className="row h-100 align-items-center">*/}
        {/*                <div className="col-sm-4 d-none d-sm-block img-steps-div">*/}
        {/*                    <img className="img-steps" src={imgSteps} alt=""/>*/}
        {/*                </div>*/}

        {/*                <div className="col-sm-8 pt-md-4 d-block-flex justify-content-center align-items-center">*/}
        {/*                    <h1 style={{color: '#F9C6C6'}} className="fa-4x text-center ">❝</h1>*/}
        {/*                    <p className="text-center case-paragraph">*/}
        {/*                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum*/}
        {/*                        has been the*/}
        {/*                        industry's standard dummy text.*/}
        {/*                    </p>*/}
        {/*                    <p className="case-paragraph-footer"><strong>Luis, 46</strong><br/>San Mateo, CA</p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}


        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 p-0">
                    <img className="img-fluid" style={{background: '#C4C4C4'}} src={imgSteps} alt="manCases"/>
                </div>
                <div className="col-md-4 p-0 d-flex justify-content-center flex-column" style={{backgroundColor: '#002D44'}}>
                    <div>
                        <h1 style={{color: '#F9C6C6'}} className="fa-4x text-center">❝</h1>
                        <p className="text-center case-paragraph">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt
                            ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p className="text-center case-paragraph-footer"><strong>Luis, 46</strong><br/>San Mateo, CA</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="row m-0">
            <div className="text-center w-70 m-auto pbp-10">
                <hr className="hr-primary mt-5 mb-5" style={{width: '100px'}}/>
                <span className="how-it-works-about-title">About YourCase</span>
                <p className="how-it-works-about-text pt-5">
                    YourCase was created by a team of legal professionals who believed that finding an attorney
                    online was unnecessarily confusing, impersonal and stressful.
                    YourCase provides people with a dignified and efficient way to find the lawyers they need, free.
                </p>
                <p className="how-it-works-about-text">
                    If you're an attorney and you'd like to work with YourCase, <span
                    className="text-decoration-underline pointer">get in touch.</span>
                </p>
            </div>
        </div>
    </div>
};

export default HowItWork;