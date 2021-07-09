/*eslint-disable*/
import React from "react";

import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {

  return (
  <>
  <Navbar collapseOnSelect fixed='top' expand="sm" bg="transparent" variant="default">
  <Container>
  <Navbar.Brand> Checkpoint Movie App </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <Nav.Link href="/">Home</Nav.Link>
    </Navbar.Text>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    
  );
}
