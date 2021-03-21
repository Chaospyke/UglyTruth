import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class HeaderApp extends Component {
  state = {};
  render() {
    return (
      <Navbar className="headerBar" expand="lg" fixed="top">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link className="headerLink" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="headerLink" to="/archive">
                Archive
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="headerLink" to="/mission">
                Mission Statement
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="headerLink" to="/external">
                External Trustworthy Sources
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="headerLink" to="/facts">
                Quick Facts
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="headerLink" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
        <Nav.Link className="pull-right">
          <Link className="headerLink" to="/login">
            Log In
          </Link>
        </Nav.Link>
      </Navbar>
    );
  }
}

export default HeaderApp;
