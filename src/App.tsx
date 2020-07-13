import React, { useEffect, useState } from 'react';
import Routes from './Routes'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { http, login } from "./Network";
//import ComingSoonComponent from "./components/ComingSoonComponent/ComingSoonComponent";
import { initialize } from "./ExecutionFlow";


const App = () => {

  const simplePw = '2020Tugboat!';
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const domain = document.location.host;
  const isDev = domain.startsWith('localhost') || domain === 'dev.yourcase.com';


  const onPwSubmit = ((e: any) => {
    e.preventDefault();

    if (password === simplePw) {
      setAuthenticated(true);
    } else {
      setError('Invalid password');
    }
  })

  const pwForm = (() => {
    return (
      <div className='global-login'>
        <form onSubmit={onPwSubmit}>
          {error ? <div className='error-msg'>{error}</div> : null}

          <div>
            <input type="password" value={password} onChange={(e: any) => {
              setError('');
              setPassword(e.currentTarget.value);
            }} />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  })

  const router = (() => {
    return (
      // <ComingSoonComponent/>
      <Router>
        <Switch>
          {Routes.map(r => (
            <Route exact key={r.id} path={r.path}>
              <r.component />
            </Route>)
          )}
        </Switch>
      </Router>
    );
  })


  useEffect(() => {
    login({ username: 'hans@allcode.com', password: 'wpwd' });
    initialize(http);
  }, []);

  const ui = !isDev || authenticated ? router() : pwForm();
  return ui;
};

export default App;
