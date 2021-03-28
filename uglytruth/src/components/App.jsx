import React, { Component } from "react";
import HeaderApp from "./headerApp";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import HomeApp from "./HomeApp";
import ArchiveApp from "./ArchiveApp";
import MissionApp from "./MissionApp";
import ExternalApp from "./ExternalApp";
import FactsApp from "./FactsApp";
import ContactApp from "./ContactApp";
import LoginApp from "./LoginApp";
import StoryApp from "./StoryApp";

class App extends Component {
  state = {
    loggedInUser: null,
    loginUsers: [
      {
        userId: "userName@email.com",
        password: "badPassword",
        userName: "Malcom Zes",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId: "iserName@email.net",
        password: "n07@b4d1",
        userName: "Remid Zost",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId: "faceCrime@email.io",
        password: "l4ck1n@",
        userName: "Samus Aran",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId: "noisyGirl@email.net",
        password: "sc33rchinG",
        userName: "Kaka Foni",
        profileImg: "https://picsum.photos/20",
      },

      {
        userId: "ALWAYSAGNRY@email.com",
        password: "peace_full_of",
        userName: "Sean Aggre",
        profileImg: "https://picsum.photos/20",
      },
    ],
    loginDetails: {
      parentLogin: (e) => this.handleLoginCallback(e),
      parentLogOut: (e) => this.handleLogoutCallback(e),
    },
  };

  handleLoginCallback(e) {
    this.state.loginUsers.map((v, i) => {
      if (v.userId === e.user) {
        if (v.password === e.pass) {
          this.setState({ loggedInUser: v });
          console.log(this.state);
          console.log(v);
        } else {
          return false;
        }
      }
      return true;
    });
  }

  handleLogoutCallback(e) {
    this.setState({ loggedInUser: null });
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
            <Route
              path="/story/:storyId"
              component={(props) => <StoryApp {...props} />}
            ></Route>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
