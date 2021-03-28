import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

class HeaderApp extends Component {
  state = {};

  renderLogin() {
    if (this.props.loggedInUser) {
      return (
        <React.Fragment>
          <span className="colored-text">
            {this.props.loggedInUser.userName}
          </span>
          <Image src={this.props.loggedInUser.profileImg} />
          <span
            onClick={this.props.loginDetails.parentLogOut}
            className="headerLink"
          >
            Log Out
          </span>
        </React.Fragment>
      );
    } else {
      return (
        <Link className="headerLink" to="/login">
          Log In
        </Link>
      );
    }
  }

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
        </Navbar.Collapse>
        <Nav.Link className="pull-right">{this.renderLogin()}</Nav.Link>
      </Navbar>
    );
  }
}

export default HeaderApp;
