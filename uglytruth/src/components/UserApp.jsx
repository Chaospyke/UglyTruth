import React, { Component } from "react";
import { Button, FormControl } from "react-bootstrap";
import TitleBarApp from "./TitleBarApp";

class UserApp extends Component{
    constructor(props) {
      super(props);
  
      this.state.loginDetails = this.props.loginDetails;
    }
    
    state={        
    titleData: {
        id: null,
        titleName: "User Info",
        SearchBool: false,
        SearchFunc: null,
        parentCallBack: null,
      },
      postUserData:(e)=>{
        fetch("http://localhost:8080/api/v1/user/postUserData",
           { method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                this.state.formdata
            )
            })
            .then(response => response.json())
            .then((data) => {
                let toSend = {data:{}};
                console.log("New Data:",data);
                document.getElementById("firstNameBox").value = data.fname;
                document.getElementById("emailBox").value = data.email;
                document.getElementById("lastNameBox").value = data.lname;
                document.getElementById("alignmentBox").value = data.alignment;
                document.getElementById("dobBox").value = data.dob;
                toSend.data = data;
                this.state.loginDetails.parentUpdate(toSend);
            });
      },
      handleSubmit:(e)=>{
        e.preventDefault();
        this.state.formdata.id = this.props.loggedInUser.data.id;
        this.state.formdata.username = this.props.loggedInUser.data.username;
        this.state.formdata.fname =  document.getElementById("firstNameBox").value;
        this.state.formdata.email = document.getElementById("emailBox").value;
        this.state.formdata.lname = document.getElementById("lastNameBox").value;
        this.state.formdata.password = this.props.loggedInUser.data.password;
        this.state.formdata.age = this.props.loggedInUser.data.age;
        this.state.formdata.alignment = document.getElementById("alignmentBox").value;
        this.state.formdata.dob = document.getElementById("dobBox").value;

        this.state.postUserData();
      },
      formdata:{},
    };



    render(){
        return(
            <div>
                <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
                <div className="row">
                    <div className = "col-lg-3"></div>
                    <div className = "col-lg-6">
                        <form>
                            <div className="row">
                                <h4 className="col-lg-6 colored-text ">
                                    UserName:
                                </h4>
                                <h4 className="col-lg-6 colored-text ">
                                    {this.props.loggedInUser.data.username}
                                </h4>

                                <h6 className="col-lg-3 colored-text ">
                                    First Name:
                                </h6>
                                <h6 className="col-lg-3 colored-text ">
                                    <FormControl
                                        defaultValue = {this.props.loggedInUser.data.fname}
                                        id = "firstNameBox"
                                        type = "text"
                                        placeholder = "Enter First Name"
                                    ></FormControl>
                                </h6>
                                <h6 className="col-lg-3 colored-text ">
                                    Last Name:
                                </h6>
                                <h6 className="col-lg-3 colored-text ">
                                    <FormControl
                                        defaultValue = {this.props.loggedInUser.data.lname}
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
                                        defaultValue = {this.props.loggedInUser.data.email}
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
                                        defaultValue = {this.props.loggedInUser.data.alignment}
                                        id = "alignmentBox"
                                        type = "text"
                                        placeholder = "Enter Alignment"
                                    ></FormControl>
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    Date of Birth:
                                </h6>
                                <h6 className="col-lg-2 colored-text ">
                                    <FormControl
                                        defaultValue ={this.props.loggedInUser.data.dob}
                                        id = "dobBox"
                                        type = "date"
                                        placeholder = "Enter Date of Birth"
                                    ></FormControl>
                                </h6>
                            </div>
                            <div className="row">
                                <div className="col-lg-2">
                                    <Button
                                        as="Submit"
                                        variant="utSearch"
                                        onClick={this.state.handleSubmit}
                                    >
                                        Submit Changes
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserApp;

