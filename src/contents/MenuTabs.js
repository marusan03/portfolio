import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export default function MenuTabs() {
  return (
    <Navbar bg="dark" sticky="Top" variant="dark">
      <LinkContainer to="/portfolio">
        <Navbar.Brand>Menu</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey="/portfolio" className="mr-auto">
          <LinkContainer to="/portfolio">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio/skills">
            <Nav.Link>Skills</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
