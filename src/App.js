import React from 'react';
import './App.css';

import routerMapper from './shared/libs/RouterMapper';

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import routes from './routes';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          {routerMapper(routes)}
        </Switch>
      </Router>

    </div>
  );
}


export default App;
