import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink, withRouter} from "react-router-dom";
import icon_accidents_and_injuries from "../../../Assets/icons/Layer 5.png"
import icon_health_and_medical_issues from "../../../Assets/icons/health_medical 1.png"
import icon_labor_work_place_issues from "../../../Assets/icons/labor_workplace 1.png";
import icon_sexual_harassment from "../../../Assets/icons/sexual_harassment 1.png";
import icon_sexual_abuse from "../../../Assets/icons/sexual_abuse 1.png";
import icon_elder_abuse from "../../../Assets/icons/elder 1.png";

const cases = [
    {
        id: 1,
        routeUrl: '/accidents_and_injuries/24',
        label: 'Accidents & Injuries',
        icon: icon_accidents_and_injuries
    },
    {
        id: 2,
        routeUrl: '/health_and_medical_issues/24',
        label: 'Health & Medical Issues',
        icon: icon_health_and_medical_issues
    },
    {
        id: 3,
        routeUrl: '/labor_work_place_issues/24',
        label: 'Labor & Workplace Issues',
        mobileLabel: 'Labor & WorkPlace',
        icon: icon_labor_work_place_issues
    },
    {
        id: 4,
        routeUrl: 'sexual_harassment/24',
        label: 'Sexual Harassment',
        icon: icon_sexual_harassment
    },
    {
        id: 5,
        routeUrl: 'sexual_abuse/24',
        label: 'Sexual Abuse',
        icon: icon_sexual_abuse
    },
    {
        id: 6,
        routeUrl: 'elder_abuse/24',
        label: 'Elder Abuse',
        icon: icon_elder_abuse
    }
];

const CasesComponentLegacy = () => {


    return (
        <div className="container-fluid">
            <div className="content-cases col-12 col-lg-10 mx-auto">
                <div className="text-center pt-md-5 mt-5 mt-md-0">
                    {/*<h2 className="font-weight-bolder"> Have a case? We can help. </h2>*/}
                    <span className="cases-title"> Have a case? We can help. </span>
                    <p className="cases-subtitle pt-3">We can find you an attorney who focuses on cases like yours.</p>
                </div>

                {/*<div className="row">*/}
                {/*  {cases.map(c => {*/}
                {/*    return (*/}
                {/*      <div key={c.id + "item"} className="col-lg-4 col-6 p-2">*/}

                {/*        <NavLink to={c.routeUrl} className="item-route d-flex align-items-center pointer item-on-display">*/}
                {/*          <div className="col-10">*/}
                {/*            <h6 className="m-0 cl-white">{c.label}</h6>*/}
                {/*          </div>*/}
                {/*          <div className="col-2">*/}
                {/*            <FontAwesomeIcon className="white-opacity" icon={faChevronRight}/>*/}
                {/*          </div>*/}
                {/*        </NavLink>*/}

                {/*        <NavLink to={c.routeUrl}*/}
                {/*                 className="item-route m-auto d-flex justify-content-center align-items-center icon-on-display">*/}
                {/*          <div className="text-center">*/}
                {/*            <img src={c.icon} alt=""/>*/}
                {/*            <h6 className="mt-4 subtitle">{c.label}</h6>*/}
                {/*          </div>*/}
                {/*        </NavLink>*/}
                {/*      </div>*/}

                {/*    )*/}
                {/*  })}*/}
                {/*</div>*/}


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
        </div>
    )
};


export default withRouter(CasesComponentLegacy);
