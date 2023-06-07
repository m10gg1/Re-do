import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Hero from "./Hero";


const Tabs = () => {
    return ( 
        <>
        <Navbar bg="dark" variant="dark">

          <Container className="Second-nav">
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav className="me-auto">
           
            
            <NavDropdown.Item href="#action3"><Nav.Link className="li" href="/Rooms">Rooms <i class="fa-sharp fa-solid fa-house-user fa-xl fa-beat"></i></Nav.Link></NavDropdown.Item>
            <NavDropdown.Item href="#action3"> <Nav.Link className="li" href="/Food">Food <i class="fa fa-cutlery fa-lg fa-bounce" aria-hidden="true"></i>  </Nav.Link></NavDropdown.Item>
            <NavDropdown.Item href="#action3">    <Nav.Link  className="li" href="/Spa">Spa <i class="fa fa-shower fa-lg fa-flip"></i></Nav.Link></NavDropdown.Item>
              {/* <Nav.Link className="li" href="/">Room</Nav.Link> */}
              {/* <Nav.Link className="li" href="/Food">Food</Nav.Link> */}
            
              
            </Nav>
          </Container>
        </Navbar>
       
  
      </>
     );
}
 
export default Tabs;