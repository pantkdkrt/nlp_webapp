import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../Styles/nav.css";
import { Link, useHistory } from "react-router-dom";

function Nav() {
  return (
    <Navbar className="nav-bar">
      <Container>
        <Navbar.Brand>THE SCAMPER</Navbar.Brand>
      </Container>

      <Container>
        <Link id="nav-link" to="">Demo</Link>
        <Link id="nav-link" to="/how2api">How2API</Link>
      </Container>
    </Navbar>
  );
}

export default Nav;
