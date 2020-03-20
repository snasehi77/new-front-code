import React from 'react';
import {NavLink} from "react-router-dom";
import {cases} from "../../Utils/Utilities";

const CasesComponent = () => {

    return <div className="content-cases">
                <div className="yc-container">
                    <div className="row pt-5 pb-3 pb-sm-5">
                        <div className="col text-center">
                            <span className="cases-title"> Have a case? We&nbsp;can&nbsp;help.</span>
                            <p className="cases-subtitle pt-3 pt-sm-2">Find an attorney who focuses on cases&nbsp;like&nbsp;yours.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {cases.map(c => {
                            return (
                                <div key={c.id + "item"} className="content-cases-item col-md-4 col-6">

                                    <NavLink to={c.routeUrl}
                                            className="item-route m-auto d-flex justify-content-center align-items-center icon-on-display">
                                        <div className="item-route-icon">
                                            <img src={c.icon} className="mobile-image-size" alt=""/>
                                        </div>
                                        <h6 className="cases-label">{c.mobileLabel ? c.mobileLabel : c.label}</h6>
                                    </NavLink>
                                </div>
                            )
                        })}
                        <span className="final-case-paragraph pt-3 mt-4">Can’t find what you are looking for? <strong className="final-case-paragraph-link">Contact&nbsp;us.</strong></span>
                    </div>
                </div>        
            </div>
};

export default CasesComponent;
