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
  state = { testAtt: "Test" };

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
            <HeaderApp></HeaderApp>
            <Route exact path="/home" component={HomeApp}></Route>
            <Route exact path="/archive" component={ArchiveApp}></Route>
            <Route exact path="/mission" component={MissionApp}></Route>
            <Route exact path="/external" component={ExternalApp}></Route>
            <Route exact path="/facts" component={FactsApp}></Route>
            <Route exact path="/contact" component={ContactApp}></Route>
            <Route exact path="/login" component={LoginApp}></Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route
              path="/story/:storyId"
              component={(props) => (
                <StoryApp {...props} parentState={this.state} />
              )}
            ></Route>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
