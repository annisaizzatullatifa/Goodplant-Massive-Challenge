import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from 'react-router-dom';
import "../Style/Navbar.css";
import LogoNav from "../Gambar/LogoNav.png";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="NavbarHeader navbar-margin-top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="#">
            <img src={LogoNav} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/HomePage">Home</Nav.Link>
              <Nav.Link as={Link} to="/MyPlants">My Plant</Nav.Link>
              <Nav.Link as={Link} to="/Galeri">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/GuidesPage">Guides</Nav.Link>
              <Nav.Link as={Link} to="/Schedule">Schedule</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title={<i className="bi bi-person"></i>} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
