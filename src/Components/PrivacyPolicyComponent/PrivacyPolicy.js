import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {terms} from '../../Utils/PrivacyPolicy';

const PrivacyPolicy = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand" href="#">
          <i>
            <FontAwesomeIcon icon={faUser} className="mr-1"/>
            YourCase
          </i>
        </NavLink>
      </nav>
      <div className="container-fluid content-privacy pt-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-8 col-sm-12">
            <h2 className="font-weight-light">{terms.Title}</h2>
            <p className="subtitle font-weight-light">{terms.description}</p>
            <br/>
            {terms.points.map(t => {
              return (
                <div className="mb-5">
                  <h5 className="font-weight-bold">{t.title}</h5>
                  <p style={{fontFamily: 'sans-serif'}} className="subtitle font-weight-light ">{t.description}</p>
                  {t.subPoints && <div className="mt-3">
                    <ul>
                      {t.subPoints.map(s => {
                        return <li className="font-weight-light">
                          {s.item}
                          {s.subItems && <div>
                            <ul>
                              {s.subItems.map(si => {
                                return <li className="font-weight-light"> {si.subItem} </li>
                              })}
                            </ul>
                          </div>}
                        </li>
                      })}
                    </ul>
                  </div>}

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
};

export default PrivacyPolicy;