import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Form, FormControl, Button } from "react-bootstrap";

class ContactApp extends Component {
  state = {
    titleData: {
      id: null,
      titleName: "Contact Us",
      SearchBool: false,
      SearchFunc: null,
      parentCallBack: null,
    },
    functionCallTest:(e)=>{
      console.log("functionCallTest called");
      fetch("http://localhost:8080/api/v1/user/getUserByUsername",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          {
            username:"coolguy93"
          }
        )
      })
        .then(response => response.json())
        .then((data)=>console.log("Result:",data));
      console.log("functionCallTest end");
    }
  };

  render() {
    return (
      <div>
        <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="row">
              <h3 className="col-lg-12 titleDisplay">Email</h3>
              <Form className="col-lg-12">
                <FormControl
                  as="textarea"
                  placeholder="Send us any questions you have."
                ></FormControl>
                <Button as="Submit" variant="utSearch"
                  onClick={this.state.functionCallTest}
                >
                  Submit Email
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    );
  }
}

export default ContactApp;
