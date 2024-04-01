import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Button, Form, FormControl } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SignApp extends Component {
    constructor(props){
        super(props);

        this.state.loginDetails = this.props.loginDetails;
    }

    state={
        titleData:{
        id: null,
        titleName: "Sign Up",
        SearchBool: false,
        SearchFunc: null,
        parentCallBack: null,
      },
      insertUser:(e) =>{
            e.preventDefault(); 
            this.state.getUserinfo();
            console.log(this.state.formdata);

            fetch("http://localhost:8080/api/v1/user/insertUser",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(this.state.formdata)
            })
            .then(response=>response.json())
            .then((data) =>{
                console.log(data);
                let loginInfo = {data:{}};
                loginInfo.data = data[0];
                
                this.state.loginDetails.parentLogin(loginInfo);
                this.props.history.push("/userInfo");
            });
        },
        getUserinfo:(e) => {
            if(e) e.preventDefault();

            this.state.formdata.username = document.getElementById("userNameBox").value;
            this.state.formdata.fname = document.getElementById("firstNameBox").value;
            this.state.formdata.lname = document.getElementById("lastNameBox").value;
            this.state.formdata.email = document.getElementById("emailBox").value;
            this.state.formdata.password = document.getElementById("passwordBox").value;
            this.state.formdata.dob = document.getElementById("dobBox").value;
            this.state.formdata.age = document.getElementById("ageBox").value;
            this.state.formdata.alignment = document.getElementById("alignmentBox").value;
        },
      formdata:{}
    };

    render(){
        return (
            <div>
                <TitleBarApp titleData ={this.state.titleData}></TitleBarApp>
                <div className="row">
                    <div className = "col-lg-3"></div>
                    <div className = "col-lg-6">
                        <Form onSubmit={this.state.insertUser}> 
                            <div className="row">
                                <h3 className="col-lg-3 colored-text ">
                                    UserName:
                                </h3>
                                <h3 className="col-lg-3 colored-text ">
                                    <FormControl
                                        id = "userNameBox"
                                        type = "text"
                                        placeholder = "Enter Username"
                                    ></FormControl>
                                </h3>
                                <h3 className="col-lg-3 colored-text ">
                                    Password:
                                </h3>
                                <h3 className="col-lg-3 colored-text ">
                                    <FormControl
                                        id = "passwordBox"
                                        type = "text"
                                        placeholder = "Enter Password"
                                    ></FormControl>
                                </h3>

                                <h6 className="col-lg-2 colored-text ">
                                    First Name:
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    <FormControl
                                        id = "firstNameBox"
                                        type = "text"
                                        placeholder = "Enter First Name"
                                    ></FormControl>
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    Last Name:
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    <FormControl
                                        id = "lastNameBox"
                                        type = "text"
                                        placeholder = "Enter Last Name"
                                    ></FormControl>
                                </h6>

                                <h6 className="col-lg-2 colored-text ">
                                    Email:
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    <FormControl
                                        id = "emailBox"
                                        type = "email"
                                        placeholder = "Enter Email"
                                    ></FormControl>
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    Alignment:
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    <FormControl
                                        id = "alignmentBox"
                                        type = "text"
                                        placeholder = "Enter Alignment"
                                    ></FormControl>
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    Age:
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    <FormControl
                                        id = "ageBox"
                                        type = "text"
                                        placeholder = "Enter Age"
                                    ></FormControl>
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    Date of Birth:
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    <FormControl
                                        id = "dobBox"
                                        type = "date"
                                        placeholder = "Enter Date of Birth"
                                    ></FormControl>
                                </h6>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <Button
                                        type="Submit"
                                        variant="utSearch"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignApp);