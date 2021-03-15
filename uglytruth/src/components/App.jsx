import React, { Component } from "react";
import HeaderApp from "./headerApp";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomeApp from "./HomeApp";
import ArchiveApp from "./ArchiveApp";
import MissionApp from "./MissionApp";
import ExternalApp from "./ExternalApp";
import FactsApp from "./FactsApp";
import ContactApp from "./ContactApp";
import LoginApp from "./LoginApp";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="headerBar">
          <Router>
            <HeaderApp></HeaderApp>
            <Route exact path="/home" component={HomeApp}></Route>
            <Route exact path="/archive" component={ArchiveApp}></Route>
            <Route exact path="/mission" component={MissionApp}></Route>
            <Route exact path="/external" component={ExternalApp}></Route>
            <Route exact path="/facts" component={FactsApp}></Route>
            <Route exact path="/contact" component={ContactApp}></Route>
            <Route exact path="/login" component={LoginApp}></Route>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
