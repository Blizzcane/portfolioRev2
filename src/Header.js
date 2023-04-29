import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="d-flex flex-column flex-md-row justify-content-between ">
      <Navbar.Brand>Kishor Krishnan</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
