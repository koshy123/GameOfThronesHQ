import React from "react"
import {Link} from "react-router-dom"
import nav from "./nav.css"
import logo from "./components/images/got-title.avif"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar () {
return (
  <Navbar className="nav" bg="light" expand="lg">
  <Container>
  <img  src={logo} width="100" height="50"></img>

    <Navbar.Brand href="#home" className="nav-title">Game of Thrones</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">        
      <Link to='/' className='about-me'><Nav.Link  href="#link">Home</Nav.Link> </Link>
      <Link to='/components/Quote' className='about-me'><Nav.Link  href="#link" > Game</Nav.Link> </Link> 
      <Link to='/components/AboutMe' className='about-me'><Nav.Link  href="#link">About</Nav.Link> </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
  };
export default NavBar;

