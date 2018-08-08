import React, { Component, Fragment } from "react";
import axios from "axios";

import "./App.css";
import Friend from "./components/friends/Friend";

let dataUrl = "http://localhost:5000/friends/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsData: [],
      loading: true
    };
  }
  componentDidMount() {
    axios.get(dataUrl).then(response => {
      console.log("RESPONSE", response);
      this.setState({ friendsData: response.data, loading: false });
    });
  }

  // getFriend = id => {

  // }

  render() {
    console.log("App Page, friendsdata", this.state.friendsData);
    return (
      <Fragment>
        <Friend friends={this.state.friendsData} />
      </Fragment>
    );
  }
}

export default App;
