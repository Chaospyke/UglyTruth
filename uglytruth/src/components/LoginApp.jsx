import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Button, Form, Row, Col, Image } from "react-bootstrap";

class LoginApp extends Component {
  constructor(props) {
    super(props);

    this.state.loginDetails = this.props.loginDetails;
  }

  state = {
    titleData: {
      id: null,
      titleName: "Login",
      SearchBool: false,
      SearchFunc: null,
      parentCallBack: null,
    },
  };

  handleLogin = (e) => {
    e.preventDefault();
    let loginInfo = {};
    loginInfo.user = document.getElementById("usernameInput").value;
    loginInfo.pass = document.getElementById("passwordInput").value;
    this.state.loginDetails.parentLogin(loginInfo);
    return true;
  };

  renderLogin() {
    if (this.props.loggedInUser) {
      return (
        <div className="row">
          <div className="col-sm-3">
            <Image src={this.props.loggedInUser.profileImg} />
          </div>
          <div className="col-sm-3">
            <div className="colored-text">Username:</div>
            <div className="colored-text">
              {this.props.loggedInUser.userName}
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="headerLink"
              onClick={this.props.loginDetails.parentLogOut}
            >
              Log Out
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Form onSubmit={this.handleLogin}>
          <Form.Group as={Row} controlId="usernameInput">
            <Form.Label column sm="2" className="colored-text">
              Username
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="formStyle"
                plaintext
                type="email"
                placeholder="Enter Username"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="passwordInput">
            <Form.Label column sm="2" className="colored-text">
              Email address
            </Form.Label>
            <Col sm="10">
              <Form.Control
                className="formStyle"
                plaintext
                type="password"
                placeholder="Enter Password"
              />
            </Col>
          </Form.Group>
          <Button type="submit" variant="utSearch">
            Login
          </Button>
        </Form>
      );
    }
  }

  render() {
    return (
      <div>
        <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
        {this.renderLogin()}
      </div>
    );
  }
}

export default LoginApp;
