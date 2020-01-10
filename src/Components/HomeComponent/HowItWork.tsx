import React from 'react';
import {steps} from "../../Utils/Utilities";

const  HowItWork = () => {
    return <div className="container-fluid">
        <div className="row m-0">
            <div className="container mt-5 mt-md-0 w-80 ptp-10 pbp-10 content-steps">
                <hr className="hr-primary" style={{width: "100px"}}/>
                <h1 className="text-center  how-it-works-title pt-4 mb-5">Here´s how it works</h1>
                <div className="row mb-5 pt-5 justify-content-center">
                    {steps.map(s => {
                        return (
                            <div key={s.num} className="col-lg-4 col-md-6 col-12">
                                <h1 className={s.num === '1' ? "how-it-works-num" : "how-it-works-num mt-5 mt-md-0"}>{s.num}</h1>
                                <p className="how-it-works-title-num"> {s.title}</p>
                                <p className="how-it-works-description-num">{s.p1}<br/>{s.p2 && s.p2}</p>
                            </div>
                        )
                    })}
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