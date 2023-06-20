import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Hero from "./Hero";

const Tabs = () => {
  return (
    <>
      <Navbar bg="light">
        <Container className="Second-nav">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav className="me-auto">
            <NavDropdown.Item href="#action3">
              <Nav.Link className="li" href="/Rooms" style={{ color: "grey" }}>
                Rooms <i class="fa-sharp fa-solid fa-house-user fa-xl"></i>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              {" "}
              <Nav.Link className="li" href="/Food" style={{ color: "grey" }}>
                Food <i class="fa fa-cutlery fa-lg" aria-hidden="true"></i>{" "}
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
              {" "}
              <Nav.Link className="li" href="/Spa" style={{ color: "grey" }}>
                Spa <i class="fa fa-shower fa-lg"></i>
              </Nav.Link>
            </NavDropdown.Item>
            {/* <Nav.Link className="li" href="/">Room</Nav.Link> */}
            {/* <Nav.Link className="li" href="/Food">Food</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Tabs;
