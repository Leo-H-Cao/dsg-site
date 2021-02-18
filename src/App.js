import React from "react";
import Header from './components/Header';
import Dining from './components/Dining';
import Service from './components/Service';
import History from './components/History';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dining">
          <Dining />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
    </Router> 
  );
}

export default App;
