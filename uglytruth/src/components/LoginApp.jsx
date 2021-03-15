import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Button, Form, Row, Col } from "react-bootstrap";

class LoginApp extends Component {
  state = {
    titleData: {
      id: null,
      titleName: "Login",
      SearchBool: false,
      SearchFunc: null,
      parentCallBack: null,
    },
  };

  render() {
    return (
      <div>
        <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
        <Form>
          <Form.Group as={Row} controlId="usernameInput">
            <Form.Label column sm="2" className="headerLink">
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
            <Form.Label column sm="2" className="headerLink">
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
      </div>
    );
  }
}

export default LoginApp;
