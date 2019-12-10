import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";


const Auth = () => {

  const [state, setState] = useState<any>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="content-auth">
      <NavLink to="/" className="your-case-logo font-weight-bold text-decoration-none color-primary">
        <FontAwesomeIcon icon={faUser} className="mr-1"/>
        YourCase
      </NavLink>
      <div className="content-auth-form relative-size bg-beige-custom">
        <div className="col-lg-4 col-md-8 col-sm-12">
          <form>
            <h4 className="text-center mb-3 color-primary">LOG IN</h4>
            <div className="form-group">
              <input value={state.user} onChange={({target: {value}}) => setState({...state, user: value})} type="text"
                     className="form-control" placeholder="username or email"/>
            </div>

            <div className="form-group">
              <input value={state.password} onChange={({target: {value}}) => setState({...state, password: value})}
                     type="password" className="form-control" placeholder="password"/>
            </div>

            <div className="text-center m-2">
              <NavLink to="/forgot_password"><small>Forgot password?</small> </NavLink>
            </div>
            <div className="form-group">
              <button className="btn btn-info w-100">Log In</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
};

export default Auth;