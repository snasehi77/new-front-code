import React from 'react';
import imgSteps from '../../Assets/Images/man2.png'

const steps = [
    {
        num: '1',
        title: 'Tell us what happened.',
        description: 'Answer a few simple questions about your case.'
    },
    {
        num: '2',
        title: 'We make an introduction.',
        description: 'Based on your answers, we find an attorney for you.'
    },
    {
        num: '3',
        title: 'They get in touch.',
        description: 'Within minutes, you´ll be introduced to an attorney interested in representing you.'
    }
];

const HowItWorks = () => {
    return (
        <>
            <div className="container mt-5 mt-md-0 w-80 ptp-10 pbp-10 content-steps">
                <hr className="hr-primary" style={{width: "100px"}}/>
                <h1 className="text-center how-it-works-title font-graphik-medium pt-4 mb-5">Here´s how it works</h1>
                <div className="row mb-5 justify-content-center">
                    {steps.map(s => {
                        return (
                            <div key={s.num} className="col-lg-4 col-md-6 col-12">
                                <h1 className={s.num === '1' ? "font-num font-graphik-medium" : "font-num font-graphik-medium mt-5 mt-md-0"}>{s.num}</h1>
                                <h4 className="title-mobile font-graphik-medium"> {s.title}</h4>
                                <p className="description-color description-mobile font-graphik-regular">{s.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


            {/*<div className="blue-background row">*/}
            {/*  <div className="col-lg-4 col-sm-12 ">*/}
            {/*    <div className="img-steps">*/}
            {/*      <img className="img-fluid" style={{background: '#E5E5E5'}} src={imgSteps} alt=""/>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  <div className="col-lg-8 col-sm-12 d-flex justify-content-center align-items-center">*/}
            {/*    <div>*/}
            {/*      <h1 style={{color: '#F5CCF5'}} className="fa-4x text-center ">❝</h1>*/}
            {/*      <p className="text-center white-opacity ">*/}
            {/*        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the*/}
            {/*        industry's standard dummy text.*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*----------------Option G----------------*/}


            {/*<div className="container">*/}
            {/*  <div className="row justify-content-center align-items-center">*/}
            {/*    <div className="col-10 col-sm-2 p-0 d-sm-none">*/}
            {/*      <img className="img-fluid" style={{background: '#E5E5E5'}} src={imgSteps} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div className="col-12 col-sm-8 col-md-8 blue-temp col-lg-8 container-height-steps">*/}
            {/*      <div className="row h-100 align-items-center">*/}
            {/*        <div className="col-sm-4 d-none d-sm-block img-steps-div">*/}
            {/*          <img className="img-steps" src={imgSteps} alt=""/>*/}
            {/*        </div>*/}

            {/*        <div className="col-sm-8 pt-md-4 d-block-flex justify-content-center align-items-center">*/}
            {/*          <h1 style={{color: '#F9C6C6'}} className="fa-4x text-center ">❝</h1>*/}
            {/*          <p className="text-center case-paragraph">*/}
            {/*            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum*/}
            {/*            has been the*/}
            {/*            industry's standard dummy text.*/}
            {/*          </p>*/}
            {/*          <p className="case-paragraph-footer"><strong>Luis, 46</strong><br/>San Mateo, CA</p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}


            {/*----------------Option H----------------*/}

            {/*<div className="container d-md-flex p-0">*/}
            {/*    <div className="row m-0 col-12 col-md-5 col-lg-5 col-xl-4 pr-md-0 blue-temp-gradient">*/}
            {/*        <div className="col-8 col-sm-7 col-md-5 my-auto mx-auto d-block p-0 img-steps">*/}
            {/*            <img className="img-fluid" style={{background: '#E5E5E5'}} src={imgSteps} alt=""/>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="row col-12 col-md-5 m-0 col-lg-5 col-xl-6 pl-md-0 blue-temp">*/}
            {/*        <div className="col-12 pl-md-0 pt-5">*/}
            {/*            <h1 style={{color: '#F9C6C6'}} className="fa-4x text-center ">❝</h1>*/}
            {/*            <p className="text-center case-paragraph font-graphik-regular">*/}
            {/*                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum*/}
            {/*                has been the*/}
            {/*                industry's standard dummy text.*/}
            {/*            </p>*/}
            {/*            <p className="case-paragraph-footer font-graphik-regular mb-5"><strong>Luis, 46</strong><br/>San Mateo, CA</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="text-center w-60 m-auto pbp-10">
                <hr className="hr-primary mt-5 mb-5" style={{width: '100px'}}/>
                <h1 className="about-case-title font-graphik-medium">About YourCase</h1>
                <p className="description-about font-graphik-regular pt-5">
                    YourCase was created by a team of legal professionals who believed that finding an attorney
                    online was unnecessarily confusing, impersonal and stressful.
                    YourCase provides people with a dignified and efficient way to find the lawyers they need, free.
                </p>
                <p className="description-about font-graphik-regular">
                    If you're an attorney and you'd like to work with YourCase, <span
                    className="text-decoration-underline pointer">get in touch.</span>
                </p>
            </div>
        </>

    )
};


export default HowItWorks;