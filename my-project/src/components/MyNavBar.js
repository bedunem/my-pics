import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import style from "./style.css";

function MyNavBar() {
  return (
    <>
      <div className="header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img className="d-block myLogo " src="logo2.png" alt="Logo" />
          </Navbar.Brand>
          <Nav className="mr-auto  nav-fill   w-100">
            <Nav.Link href="#About Me">About Me</Nav.Link>
            <Nav.Link href="#Gallery">Gallery</Nav.Link>
            <Nav.Link href="#Process">Process</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default MyNavBar;
