import React from 'react';
import Routes from './Routes'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {Routes.map(r => (
          <Route exact key={r.id} path={r.path}>
            {r.component}
          </Route>)
        )}
      </Switch>
    </Router>
  )
};

export default App;
