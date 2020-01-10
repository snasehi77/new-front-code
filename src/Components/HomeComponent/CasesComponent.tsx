import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {cases} from "../../Utils/Utilities";

const CasesComponent = () => {

    return <div className="container content-cases">
            <div className="row">
                <div className="col text-center">
                    <span className="cases-title"> Have a case? We can help. </span>
                    <p className="cases-subtitle pt-3">We can find you an attorney who focuses on cases like yours.</p>
                </div>
            </div>
            <div className="row pt-md-5">
                {cases.map(c => {
                    return (
                        <div key={c.id + "item"} className="col-lg-4 col-6 p-2">

                            <NavLink to={c.routeUrl}
                                     className="item-route d-flex align-items-center pointer item-on-display">
                                <div className="col-10">
                                    <h6 className="m-0 cases-label">{c.label}</h6>
                                </div>
                                <div className="col-2">
                                    <FontAwesomeIcon className="white-opacity" icon={faChevronRight}/>
                                </div>
                            </NavLink>

                            <NavLink to={c.routeUrl}
                                     className="item-route m-auto d-flex justify-content-center align-items-center icon-on-display">
                                <div className="text-center p-2">
                                    <img src={c.icon} alt=""/>
                                    <h6 className="mt-4 cases-label-mobile">{c.mobileLabel ? c.mobileLabel : c.label}</h6>
                                </div>
                            </NavLink>
                        </div>

                    )
                })}
            </div>
        </div>
};

export default CasesComponent;