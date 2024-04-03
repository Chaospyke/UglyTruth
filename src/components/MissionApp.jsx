import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Accordion, Card, Nav } from "react-bootstrap";

class MissionApp extends Component {
  state = {
    titleData: {
      id: null,
      titleName: "Mission Statement",
      SearchBool: false,
      SearchFunc: (e, value) => {
        e.preventDefault();
        this.setState({
          searchTerm: document.getElementById(this.state.titleData.id).value,
        });
        this.state.titleData.parentCallBack(this.state.searchTerm);
        return null;
      },
      parentCallBack: (e) => this.handleCallBack(e),
    },
    displayData: [
      {
        key: 1,
        sectionTitle: "Our Mission",
        sectionText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      },
      {
        key: 2,
        sectionTitle: "Our Method",
        sectionText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      },
    ],
  };

  renderMissionStatements() {
    return this.state.displayData.map((e) => (
      <Card key={e.key} className="headerBar" bg="dark">
        <Card.Header>
          <Accordion.Toggle
            className="colored-text"
            as={Nav.Link}
            variant="link"
            eventKey={e.key}
          >
            {e.sectionTitle}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={e.key}>
          <Card.Body>
            <div className="row colored-text">{e.sectionText}</div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ));
  }

  render() {
    return (
      <div>
        <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
        <Accordion>{this.renderMissionStatements()}</Accordion>
      </div>
    );
  }
}

export default MissionApp;
