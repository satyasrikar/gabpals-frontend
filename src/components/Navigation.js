import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand className="align-items-center">
          <img
            src="images/gabpals-invert.png"
            alt=""
            style={{ width: "1.5rem", marginInline: "0.5rem" }}
          />
          <span>Gabpals</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Agents</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item>Register as Agent</NavDropdown.Item>
              <NavDropdown.Item>Frequently Asked Questions</NavDropdown.Item>
              <NavDropdown.Item>Support</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Gabpals Global</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              class="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form> */}
          <Nav>
            <Nav.Link>Buy Coins</Nav.Link>
            <Nav.Link eventKey={2}>
              <NavLink
                className="navLink"
                activeClassName="activeLink"
                to="/login"
              >
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              <NavLink
                className="navLink"
                activeClassName="activeLink"
                to="/register"
              >
                Register
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
