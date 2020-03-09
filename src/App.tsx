import React, {useEffect} from 'react';
import Routes from './Routes'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {http, login} from "./Network";
//import ComingSoonComponent from "./components/ComingSoonComponent/ComingSoonComponent";
import {initialize} from "execution-flow/dist";


const App = () => {

  useEffect(() => {
    login({username: 'hans@allcode.com', password: 'wpwd'});
    initialize(http);
  }, []);

  return (
    // <ComingSoonComponent/>
    <Router>
      <Switch>
        {Routes.map(r => (
          <Route exact key={r.id} path={r.path}>
            <r.component/>
          </Route>)
        )}
      </Switch>
    </Router>
  )
};

export default App;
