import React from 'react';
import './css/Header.css'
import {Navbar, Nav} from 'react-bootstrap';


function Header(){
    return (
        <Navbar className="color-nav" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="/"><h3  className="dsg-logo">dsg</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end navbar-link" style={{ width: "100%" }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/dining">Dining</Nav.Link>
                    <Nav.Link href="/service">Service</Nav.Link>
                    <Nav.Link href="/history">History</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;