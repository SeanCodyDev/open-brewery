import React, { Component } from 'react';

import {Button, Container, Nav, Navbar, Link} from 'react-bootstrap'


export default class HeaderBar extends Component {
  render() {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Open Brewery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="https://seancodydev.github.io/project-portfolio/">Other Apps</Nav.Link>
            <Nav.Link href="https://www.openbrewerydb.org/">Open Brewery API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}