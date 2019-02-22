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
            <Nav.Link className="custom-link" href="https://github.com/SeanCodyDev/open-brewery" target="_blank">View Repo</Nav.Link>
            <Nav.Link className="custom-link" href="https://seancodydev.github.io/project-portfolio/" target="_blank">My Portfolio</Nav.Link>
            <Nav.Link className="custom-link" href="https://www.openbrewerydb.org/" target="_blank">Open Brewery API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}