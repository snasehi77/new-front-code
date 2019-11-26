import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {NavLink, withRouter} from "react-router-dom";

const cases = [
  {
    id: 1,
    routeUrl: '/accidents_and_injuries/1',
    label: 'Accidents & Injuries'
  },
  {
    id: 2,
    routeUrl: '/health_and_medical_issues/2',
    label: 'Health & Medical Issues'
  },
  {
    id: 3,
    routeUrl: '/labor_work_place_issues/3',
    label: 'Labor & WorkPlace Issues'
  },
  {
    id: 4,
    routeUrl: 'sexual_harassment/4',
    label: 'Sexual Harassment'
  },
  {
    id: 5,
    routeUrl: 'sexual_abuse/5',
    label: 'Sexual Abuse'
  },
  {
    id: 6,
    routeUrl: 'elder_abuse/6',
    label: 'Elder Abuse'
  }
];

const CasesComponent = () => {

  window.addEventListener('scroll', () => {
    let scroll = document.documentElement.scrollTop;
    let element = document.getElementById("scrolling");
    if (element) {
      scroll > 200 ?
        element.className += " content-cases-transition w-80" :
        element.className = "content-cases p-10 mb-3 w-70";
    }
  });

  return (
    <div className="container-fluid">
      <div id="scrolling" className="content-cases p-10 mb-3 w-70">
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
                    <h6 className="m-0 white-opacity">{c.label}</h6>
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