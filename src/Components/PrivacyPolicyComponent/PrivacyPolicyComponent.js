import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {terms} from '../../Utils/PrivacyPolicy';
import LogoComponent from "../Shared/LogoComponent";

const PrivacyPolicyComponent = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bg-primary pb-3 content-privacy-policy">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand" href="#">
          <LogoComponent className="mr-1" light styles={{width: "120px"}} />
        </NavLink>
      </nav>
      <div className="container-fluid content-privacy">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-8 col-sm-12">
            <h4 className="font-weight-bold">{terms.Title}</h4>
            <p className="subtitle font-weight-light">{terms.description}</p>
            {terms.points.map((t, i) => {
              return (
                <div key={i} className={t.title ? "mt-2" : ""}>
                  <b className="font-weight-bold">{t.title}</b>
                  <p style={{fontFamily: 'sans-serif'}} className="subtitle font-weight-light ">{t.description}</p>
                  {t.subPoints && <div className="mt-3">
                    <ul>
                      {t.subPoints.map((s, i) => {
                        return <li key={i} className="font-weight-light">
                          {s.item}
                          {s.subItems && <div>
                            <ul>
                              {s.subItems.map((si, i) => {
                                return <li key={i} className="font-weight-light"> {si.subItem} </li>
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
    </div>
  )
};

export default PrivacyPolicyComponent;