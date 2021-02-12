import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import History from "./History";
import Dining from "./Dining";
import Service from "./Service";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dining">Dining</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/dining">
            <Dining />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
