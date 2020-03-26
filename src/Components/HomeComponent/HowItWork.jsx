import React from 'react';
import {steps} from "../../Utils/Utilities";

const HowItWork = (props) => {
    console.log(props);
    const bg = props.background;

    return <div>
     
        <div className="how-it-works">
            <div className="yc-container">
                <h1 className="text-center how-it-works-title pt-3">Here‘s how it works</h1>
                <div className="how-it-works-steps row">
                    {steps.map(s => {
                        return (
                            <div key={s.num} className="how-it-works-step p-0 col-10 col-sm-4 offset-1 offset-sm-4">
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
        <div className="yc-about">
            <div className="yc-container">
                <hr className="hr-thin mt-5 mb-4"/>
                <div className="row justify-content-center">
                    <h2 className="how-it-works-about-title mb-3 mt-2">About YourCase</h2>
                    <div className="col-12">
                        <p className="how-it-works-about-text pt-5 pb-4">
                            YourCase was created by a team of legal professionals who believed that finding an attorney online was unnecessarily confusing, impersonal and stressful. YourCase provides people with a dignified and efficient way to find the lawyers they&nbsp;need,&nbsp;free.
                        </p>
                        <p className="how-it-works-about-text">
                            If you're an attorney and you'd like to work with YourCase, <a href="mailto: attorneyinquiries@yourcase.com"
                                                                                                                    className="pointer"><b>get&nbsp;in&nbsp;touch.</b></a>
                        </p>
                    </div>
                </div>
            </div> 
        </div>  
        <div className="container-fluid">
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


            {/*<div className="container p-0 pl-md-3 pr-md-3 pb-4">*/}
            {/*    <div className="row justify-content-center m-0">*/}
            {/*        <div className="col-10 col-md-5 col-xl-4 p-0" >*/}
            {/*            <img className="img-fluid" style={{background: '#C4C4C4'}} src={imgSteps} alt="manCases"/>*/}
            {/*        </div>*/}
            {/*        <div className="col-10 col-md-7 col-lg-6 col-xl-5 p-4 p-md-3 p-lg-1 p-xl-2 d-flex*/}
            {/*        justify-content-center flex-column pt-5"*/}
            {/*             style={{backgroundColor: '#002D44'}}>*/}
            {/*            <div className="p-3 pt-md-4 pl-md-5 pr-md-5 pt-lg-4 pl-lg-5 pr-lg-5 pr-xl-5 pl-xl-5">*/}
            {/*                <h1 style={{color: '#F9C6C6'}} className="fa-4x text-center">❝</h1>*/}
            {/*                <p className="text-center case-paragraph pt-3">*/}
            {/*                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod*/}
            {/*                    tincidunt*/}
            {/*                    ut laoreet dolore magna aliquam erat volutpat.*/}
            {/*                </p>*/}
            {/*                <p className="text-center case-paragraph-footer pt-2 "><strong>Luis, 46</strong><br/>San Mateo, CA</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <PaginationComponent classStyle="rounded-circle" totalItems={1}*/}
            {/*                         pageSize={1} changePage={(currentPage: number) => handleChange(currentPage)}/>*/}
            {/*</div>*/}

            {/*<div className="row m-0">*/}
            {/*    <div className="text-center w-70 m-auto pbp-10">*/}
            {/*        <hr className="hr-primary mt-5 mb-5" style={{width: '100px'}}/>*/}
            {/*        <span className="how-it-works-about-title">About YourCase</span>*/}
            {/*        <p className="how-it-works-about-text pt-5">*/}
            {/*            YourCase was created by a team of legal professionals who believed that finding an attorney*/}
            {/*            online was unnecessarily confusing, impersonal and stressful.*/}
            {/*            YourCase provides people with a dignified and efficient way to find the lawyers they need, free.*/}
            {/*        </p>*/}
            {/*        <p className="how-it-works-about-text">*/}
            {/*            If you're an attorney and you'd like to work with YourCase, <span*/}
            {/*            className="text-decoration-underline pointer">get in touch.</span>*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    </div>
};

export default HowItWork;
