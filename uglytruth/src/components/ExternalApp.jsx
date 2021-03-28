import React, { Component } from "react";
import { Accordion, Card, Nav, Image } from "react-bootstrap";
import TitleBarApp from "./TitleBarApp";

class ExternalApp extends Component {
  constructor(props) {
    super(props);

    this.state.displayData = this.state.fetchedData;
  }

  state = {
    titleData: {
      id: "externalTrustSource",
      titleName: "External Trust Worthy Sources",
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
        key: 5,
        source: "Tim Pool",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: ["youtube", "twitter", "facebook", "other"],
      },
      {
        key: 1,
        source: "Steven Crowder",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: ["youtube", "twitter", "facebook", "other"],
      },
      {
        key: 2,
        source: "Karlyn Boresenko",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: ["youtube", "twitter", "facebook", "other"],
      },
      {
        key: 3,
        source: "Brandon Tatum",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: ["youtube", "twitter", "facebook", "other"],
      },
      {
        key: 4,
        source: "Dennis Prager",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: ["youtube", "twitter", "facebook", "other"],
      },
    ],
    displayData: [],
  };

  handleCallBack(e) {
    if (e) {
      this.setState({
        displayData: this.state.fetchedData.filter((data) => {
          return data.source.toLowerCase().includes(e.toString().toLowerCase());
        }),
      });
    } else {
      this.setState({ displayData: this.state.fetchedData });
    }
  }

  renderSearchResults() {
    return this.state.displayData.map((e) => (
      <Accordion key={e.key}>
        <Card className="headerBar" bg="dark">
          <Card.Header>
            <Accordion.Toggle
              className="headerLink"
              as={Nav.Link}
              variant="link"
              eventKey={e.key}
            >
              {e.source}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={e.key}>
            <Card.Body>
              <div className="row">
                <div className="col-lg-4">
                  <Image src={e.pict} />
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-lg-12 headerLink">Summary</div>
                    <div className="col-lg-12">{e.summary}</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-lg-12 headerLink">Links</div>
                    <div className="col-lg-12">
                      {e.links.map((v, i) => (
                        <div key={i}>
                          {i}. {v}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ));
  }

  render() {
    return (
      <div>
        <TitleBarApp titleData={this.state.titleData}></TitleBarApp>
        {this.renderSearchResults()}
      </div>
    );
  }
}

export default ExternalApp;
