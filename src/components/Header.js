import React from 'react';
import './css/Header.css'
import {Navbar, Nav} from 'react-bootstrap';

import Dining from './Dining';
import Service from './Service';
import History from './History';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header(){
    return (
        <div>
        <div>
            <Navbar className="color-nav" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand as={Link} to="/"><h3  className="dsg-logo">dsg</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end navbar-link mr-auto" style={{ width: "100%" }}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/dining">Dining</Nav.Link>
                        <Nav.Link as={Link} to="/service">Service</Nav.Link>
                        <Nav.Link as={Link} to="/history">History</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div>
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
        </div>
        </div>
    )
}

export default Header;