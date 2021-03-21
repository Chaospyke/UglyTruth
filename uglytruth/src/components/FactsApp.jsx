import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Accordion, Card, Nav, Image } from "react-bootstrap";

class FactsApp extends Component {
  state = {
    titleData: {
      id: "quickFactsSearch",
      titleName: "Quick Facts",
      SearchBool: true,
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
    fetchedData: [
      {
        title: "Quick Facts #1",
        facts:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        pict: "https://picsum.photos/200",
        archiveLink: null,
        key: 1,
      },
      {
        title: "Quick Facts #2",
        facts:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        pict: "https://picsum.photos/200",
        archiveLink: null,
        key: 2,
      },
      {
        title: "Quick Facts #3",
        facts:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        pict: "https://picsum.photos/200",
        archiveLink: null,
        key: 3,
      },
      {
        title: "Quick Facts #4",
        facts:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        pict: "https://picsum.photos/200",
        archiveLink: null,
        key: 4,
      },
      {
        title: "Quick Facts #5",
        facts:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        pict: "https://picsum.photos/200",
        archiveLink: null,
        key: 5,
      },
      {
        title: "Quick Facts #6",
        facts:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        pict: "https://picsum.photos/200",
        archiveLink: null,
        key: 6,
      },
      {
        title: "Quick Facts #7",
        facts:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        pict: "https://picsum.photos/200",
        archiveLink: null,
        key: 7,
      },
    ],
    displayData: [],
  };

  fetchFirst() {
    let that = this;
    fetch("TestData/QuickFactsData.json")
      .then(function (resp) {
        return resp;
      })
      .then(function (result) {
        console.log(result);
        console.log(result.json());
      });
  }

  handleCallBack(e) {
    if (e) {
      this.setState({
        displayData: this.state.fetchedData.filter((data) => {
          return data.title.toLowerCase().includes(e.toString().toLowerCase());
        }),
      });
    } else {
      this.setState({ displayData: this.state.fetchedData });
    }
  }

  renderSearchResults() {
    return this.state.displayData.map((e) => (
      <Card key={e.key} className="headerBar" bg="dark">
        <Card.Header>
          <Accordion.Toggle
            className="colored-text"
            as={Nav.Link}
            variant="link"
            eventKey={e.key}
          >
            {e.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={e.key}>
          <Card.Body>
            <div className="row">
              <div className="col-lg-6">
                <Image src={e.pict} />
              </div>
              <div className="col-lg-6">{e.facts}</div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ));
  }

  componentDidMount() {
    // this.fetchFirst();
    this.setState({ displayData: this.state.fetchedData });
  }

  render() {
    return (
      <div>
        <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
        <Accordion className="headerBar">
          {this.renderSearchResults()}
        </Accordion>
      </div>
    );
  }
}

export default FactsApp;
