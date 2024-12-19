import React, { Component } from "react";
// import loginUsers from "../data/users.json";
import HeaderApp from "./headerApp";
import { Route, BrowserRouter as Router, Redirect,  } from "react-router-dom";
import HomeApp from "./HomeApp";
import ArchiveApp from "./ArchiveApp";
import MissionApp from "./MissionApp";
import ExternalApp from "./ExternalApp";
import FactsApp from "./FactsApp";
import ContactApp from "./ContactApp";
import LoginApp from "./LoginApp";
import StoryApp from "./StoryApp";
import UserApp from "./UserApp";
import SignApp from "./SignApp";

class App extends Component {
  state = {
    loggedInUser: null,
    loginUsers: [
      {
        userId:"coolguy93",
        email: "userName@email.com",
        password: "badPassword",
        userName: "Malcom Zes",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId:"EdgeyDark",
        email: "iserName@email.net",
        password: "n07@b4d1",
        userName: "Remid Zost",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId:"97Sassylass",
        email: "faceCrime@email.io",
        password: "l4ck1n@",
        userName: "Samus Aran",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId:"i<3Exploud",
        email: "noisyGirl@email.net",
        password: "sc33rchinG",
        userName: "Caka Foni",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId:"madMADMad",
        email: "ALWAYSAGNRY@email.com",
        password: "peace_full_of",
        userName: "Sean Aggre",
        profileImg: "https://picsum.photos/20",
      },
    ],
    loginDetails: {
      parentLogin: (e) => this.handleLoginCallback(e),
      parentLogOut: (e) => this.handleLogoutCallback(e),
      parentUpdate: (e) => this.handleUserUpdate(e),
    },
  };

  handleLoginCallback(e) {
      fetch("http://localhost:8080/api/v1/user/loginUser",{
                  method:"POST",
                  headers:{
                      "Content-type":"application/json"
                  },
                  body:JSON.stringify(e)
              })
              .then(response=>response.json())
              .then((data) =>{
                if(!(data.error)){
                  this.setState(
                    {loggedInUser:
                      {
                    data:data
                  }});
                }else{
                  console.log("Login Failed");
                }
              },
              err =>{
                // let displayData = require('../data/users.json');
                console.log("Error:"+e+"\nLogin Failed");
                console.log(this.state.loginUsers);
              });
  }

  handleLogoutCallback(e) {
    this.setState({ loggedInUser: null });
  }

  handleUserUpdate(e){
    this.setState({loggedInUser:e});
  }

  render() {
    return (
      <React.Fragment>
        <div className="base-background">
          <style>
            {`
            .btn-utSearch {
              border-color: #f0ec14;
              color: #f0ec14;
            }
            `}
          </style>
          <Router>
            <HeaderApp
              loggedInUser={this.state.loggedInUser}
              loginDetails={this.state.loginDetails}
            ></HeaderApp>
            <Route exact path="/home" component={HomeApp}></Route>
            <Route exact path="/archive" component={ArchiveApp}></Route>
            <Route exact path="/mission" component={MissionApp}></Route>
            <Route exact path="/external" component={ExternalApp}></Route>
            <Route exact path="/facts" component={FactsApp}></Route>
            <Route exact path="/contact" component={ContactApp}></Route>
            <Route
              exact
              path="/login"
              component={() => (
                <LoginApp
                  loginDetails={this.state.loginDetails}
                  loggedInUser={this.state.loggedInUser}
                />
              )}
            ></Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/UglyTruth/">
              <Redirect to="/home" />
            </Route>
            <Route
              path="/story/:storyId"
              component={(props) => <StoryApp {...props} />}
            ></Route>
            <Route 
              exact 
              path="/userInfo" 
              component={()=>(
                <UserApp
                loginDetails={this.state.loginDetails}
                loggedInUser={this.state.loggedInUser}
                />
              )}
            ></Route>
            <Route
              exact
              path="/signUp"
              component={()=>(
                <SignApp
                  loginDetails={this.state.loginDetails}
                  loggedInUser={this.state.loggedInUser}
                />
              )}
            ></Route>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
