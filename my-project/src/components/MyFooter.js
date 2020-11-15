import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import style from "./style.css";

const MyFooter = () => {
  return (
    <div>
      <>
        <div className="header">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto  nav-fill  nav-fill w-100">
              <Nav.Link href="#About Me">About Me</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </>
    </div>
  );
};

export default MyFooter;
