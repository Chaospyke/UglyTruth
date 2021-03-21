import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

class TitleBarApp extends Component {
  /*Passed Props:
        Id - Id for search tag
        TitleName - Displayed Name
        SearchBool - Displays Search if True
        SearchFunc - Function to be called when search is pressed
        ParentCallBack - Function to pass Search data back to parent
    */
  state = {
    searchTerm: "",
  };
  renderSearch = (titleData) => {
    if (titleData.SearchBool) {
      let placeholderText = "Search " + titleData.titleName;
      return (
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4">
            <Form inline>
              <FormControl
                id={this.props.titleData.id}
                type="text"
                placeholder={placeholderText}
                className="mr-sm-2"
                onChange={this.props.titleData.SearchFunc}
              />
              <Button
                type="submit"
                variant="utSearch"
                onClick={this.props.titleData.SearchFunc}
              >
                Search
              </Button>
            </Form>
          </div>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div className="titleBar row">
        <div className="titleDisplay pull-left col-3">
          {this.props.titleData.titleName}
        </div>
        <div className="titleDisplay col-9">
          {this.renderSearch(this.props.titleData)}
        </div>
      </div>
    );
  }
}

export default TitleBarApp;
