import React, { Component } from "react";
import TitleBarApp from "./TitleBarApp";
import { Image } from "react-bootstrap";

class ArchiveApp extends Component {
  state = {
    titleData: {
      id: "archiveSearch",
      titleName: "Archived Stories",
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
        title: "Fictional Story Four",
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
        id: 7,
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
      <div key={e.id} class="row">
        <div class="col-sm-12 titleDisplay">{e.title}</div>
        <div class="row">
          <div class="col-sm-4">
            <Image src={e.pict} />
          </div>
          <div class="col-sm-4">{e.summary}</div>
          <div class="col-sm-4">
            <div class="row">
              <h6 class="headerLink">Sources</h6>
              <ul>
                {e.links.map((ee) => (
                  <li key={ee.key}>
                    {ee.relevance}:{ee.url}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  componentDidMount() {
    this.setState({ displayData: this.state.fetchedData });
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

export default ArchiveApp;
