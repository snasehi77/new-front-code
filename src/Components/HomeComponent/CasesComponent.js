import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink, withRouter} from "react-router-dom";

const cases = [
  {
    id: 1,
    routeUrl: '/accidents_and_injuries/30',
    label: 'Accidents & Injuries'
  },
  {
    id: 2,
    routeUrl: '/health_and_medical_issues/30',
    label: 'Health & Medical Issues'
  },
  {
    id: 3,
    routeUrl: '/labor_work_place_issues/30',
    label: 'Labor & WorkPlace Issues'
  },
  {
    id: 4,
    routeUrl: 'sexual_harassment/30',
    label: 'Sexual Harassment'
  },
  {
    id: 5,
    routeUrl: 'sexual_abuse/30',
    label: 'Sexual Abuse'
  },
  {
    id: 6,
    routeUrl: 'elder_abuse/30',
    label: 'Elder Abuse'
  }
];

const CasesComponent = () => {


  return (
    <div className="container-fluid">
      <div id="scrolling" className="content-cases mb-3 w-80 content-cases-transition ">
        <div className="text-center mb-3 ">
          <h2 className="font-weight-bolder"> Have a case? We can help. </h2>
          <h6 className="white-opacity">We can find you can attorney who focuses on cases like yours</h6>
        </div>

        <div className="row">
          {cases.map(c => {
            return (
              <div key={c.id} className="col-lg-4 col-12 p-3">
                <NavLink to={c.routeUrl} className="item-route d-flex align-items-center pointer">
                  <div className="col-10">
                    <h6 className="m-0 cl-white">{c.label}</h6>
                  </div>
                  <div className="col-2">
                    <FontAwesomeIcon className="white-opacity" icon={faChevronRight}/>
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


export default withRouter(CasesComponent);