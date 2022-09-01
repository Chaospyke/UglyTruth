
import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Link } from "react-router-dom";
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
    let loginInfo = {}
      ,retrievedInfo;


    loginInfo.username = document.getElementById("usernameInput").value;
    loginInfo.password = document.getElementById("passwordInput").value;
    this.state.loginDetails.parentLogin(loginInfo);
   

    // fetch("http://localhost:8080/api/v1/user/getUserByUsername",{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(
    //     {
    //       username:loginInfo.user
    //     }
    //   )
    // })
    // .then(response => response.json())
    // .then(data => {
    //   retrievedInfo = data[0];
    //   if(retrievedInfo.password === loginInfo.pass){
    //     loginInfo.data = retrievedInfo;
    //     this.state.loginDetails.parentLogin(loginInfo);
    //   }else{
    //     //TODO:Add Login Failed Feature.
    //     console.log("Login failed");
    //   }
    // });


    
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
              {this.props.loggedInUser.data.username}
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
                type="text"
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
          <Link className="headerLink" to="/signUp">
            <Button variant="utSearch">
              Sign Up
            </Button>
          </Link>
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
