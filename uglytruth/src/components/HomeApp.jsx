import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class HomeApp extends Component {
  state = {
    titleData: {
      id: "main",
      titleName: "Main",
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
        key: 1,
        id: 3343,
        title: "True Story One",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: [
          {
            url: "News Paper 1",
            relevance: 1,
            key: 1,
          },
          {
            url: "Youtube Link",
            relevance: 2,
            key: 2,
          },
          {
            url: "News Paper 3",
            relevance: 3,
            key: 3,
          },
          {
            url: "News Paper 3",
            relevance: 4,
            key: 4,
          },
          {
            url: "News Paper 1",
            relevance: 5,
            key: 5,
          },
        ],
      },
      {
        key: 2,
        id: 4081,
        title: "False Story One",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: [
          {
            url: "Youtube Link",
            relevance: 1,
            key: 1,
          },
          {
            url: "News Paper 3",
            relevance: 2,
            key: 2,
          },
          {
            url: "News Paper 2",
            relevance: 3,
            key: 3,
          },
          {
            url: "News Paper 2",
            relevance: 4,
            key: 4,
          },
          {
            url: "News Paper 2",
            relevance: 5,
            key: 5,
          },
          {
            url: "News Paper 1",
            relevance: 6,
            key: 6,
          },
        ],
      },
      {
        key: 3,
        title: "Fake Story Two",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: [
          {
            url: "News Paper 2",
            relevance: 1,
            key: 1,
          },
          {
            url: "News Paper 2",
            relevance: 2,
            key: 2,
          },
          {
            url: "News Paper 3",
            relevance: 3,
            key: 3,
          },
        ],
      },
      {
        key: 4,
        id: 2247,
        title: "Honest Story Two",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: [
          {
            url: "News Paper 3",
            relevance: 1,
            key: 1,
          },
          {
            url: "Youtube Link",
            relevance: 2,
            key: 2,
          },
          {
            url: "Youtube Link",
            relevance: 3,
            key: 3,
          },
          {
            url: "News Paper 2",
            relevance: 4,
            key: 4,
          },
          {
            url: "News Paper 3",
            relevance: 5,
            key: 5,
          },
        ],
      },
      {
        key: 5,
        id: 8008,
        title: "Fabricated Story Three",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: [
          {
            url: "Youtube Link",
            relevance: 1,
            key: 1,
          },
          {
            url: "News Paper 3",
            relevance: 2,
            key: 2,
          },
          {
            url: "News Paper 1",
            relevance: 3,
            key: 3,
          },
          {
            url: "News Paper 1",
            relevance: 4,
            key: 4,
          },
        ],
      },
      {
        key: 6,
        id: 9006,
        title: "Falcified Story Four",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: [
          {
            url: "News Paper 3",
            relevance: 1,
            key: 1,
          },
          {
            url: "News Paper 3",
            relevance: 2,
            key: 2,
          },
          {
            url: "News Paper 2",
            relevance: 3,
            key: 3,
          },
          {
            url: "News Paper 1",
            relevance: 4,
            key: 4,
          },
          {
            url: "Youtube Link",
            relevance: 5,
            key: 5,
          },
          {
            url: "Youtube Link",
            relevance: 6,
            key: 6,
          },
        ],
      },
      {
        key: 7,
        id: 5610,
        title: "Factual Story Three",
        pict: "https://picsum.photos/200",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet suscipit nulla, vel varius lorem. Praesent vitae laoreet nulla, eu ultrices sem. Praesent hendrerit sem quis lectus blandit vehicula. Morbi vestibulum aliquet dolor, feugiat vestibulum nunc cursus lacinia. Quisque tortor ante, aliquet et magna vitae, lacinia finibus metus. Nam a nunc ante. Vestibulum bibendum quam ac luctus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
        links: [
          {
            url: "Youtube Link",
            relevance: 1,
            key: 1,
          },
          {
            url: "News Paper 1",
            relevance: 2,
            key: 2,
          },
          {
            url: "News Paper 3",
            relevance: 3,
            key: 3,
          },
          {
            url: "Youtube Link",
            relevance: 4,
            key: 4,
          },
          {
            url: "Youtube Link",
            relevance: 5,
            key: 5,
          },
        ],
      },
    ],
    displayData: [],
  };

  handleCallBack(e) {
    if (e) {
      let topData;
      let botData;
      let toReturn;

      topData = this.state.fetchedData.filter((data) => {
        return data.title.toLowerCase().includes(e.toString().toLowerCase());
      });
      botData = this.state.fetchedData.filter((data) => {
        return !data.title.toLowerCase().includes(e.toString().toLowerCase());
      });
      toReturn = topData.concat(botData);

      this.setState({
        displayData: toReturn,
      });
    } else {
      this.setState({ displayData: this.state.fetchedData });
    }
  }

  renderView(e) {
    return this.state.displayData.map((e) => (
      <React.Fragment>
        <div key={e.key} className="row">
          <div className="col-sm-12 titleDisplay">{e.title}</div>
          <div className="row">
            <div className="col-sm-6">
              <Image src={e.pict} />
            </div>
            <div className="col-sm-6 colored-text">{e.summary}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9"></div>
          <div className="col-sm-3">
            <Link className="headerLink" to={`/story/` + e.id}>
              Link to {e.title}
            </Link>
          </div>
        </div>
      </React.Fragment>
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
        {this.renderView()}
      </div>
    );
  }
}

export default HomeApp;
