import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand>Gabpals</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Models</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item>Register as Agent</NavDropdown.Item>
              <NavDropdown.Item>Frequently Asked Questions</NavDropdown.Item>
              <NavDropdown.Item>Support</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Gabpals Global</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>Buy Coins</Nav.Link>
            <Nav.Link eventKey={2}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
