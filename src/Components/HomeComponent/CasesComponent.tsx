import React from 'react';
import {NavLink} from "react-router-dom";
import {cases} from "../../Utils/Utilities";

const CasesComponent = () => {

    return <div className="container container-tablet-view content-cases">
            <div className="row pt-5 pb-5 mt-3">
                <div className="col text-center">
                    <span className="cases-title"> Have a case? We can help. </span>
                    <p className="cases-subtitle pt-2">We can find you an attorney who focuses <br className={'br-xs'}/>on cases like yours.</p>
                </div>
            </div>
            <div className="row justify-content-center pt-md-4">
                {cases.map(c => {
                    return (
                        <div key={c.id + "item"} className="col-md-4 col-6 p-2">

                          <NavLink to={c.routeUrl}
                                     className="item-route m-auto d-flex justify-content-center align-items-center icon-on-display">
                                <div className="text-center p-2">
                                    <img src={c.icon} className="mobile-image-size" alt=""/>
                                    <h6 className="mt-4 cases-label">{c.mobileLabel ? c.mobileLabel : c.label}</h6>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
                <span className="final-case-paragraph pt-4 pt-md-3 mt-3">Can’t find what you are looking for? <strong className="final-case-paragraph-link">Contact us.</strong></span>
            </div>
        </div>
};

export default CasesComponent;
