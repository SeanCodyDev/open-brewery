import React, { Component } from 'react';

import {Button, Container, Nav, Navbar, Link} from 'react-bootstrap'

import './headerbar.css'

export default class HeaderBar extends Component {
  render() {

    return (
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand href="#" className="custom-brand">Open Brewery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end col">
          <Nav>
            <Nav.Link className="custom-link" href="https://seancodydev.github.io/project-portfolio/">My Portfolio</Nav.Link>
            <Nav.Link className="custom-link" href="https://www.openbrewerydb.org/">Open Brewery API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}