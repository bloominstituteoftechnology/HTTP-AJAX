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
      this.setState({
        friendsData: response.data,
        loading: false
      });
    });
  }
  render() {
    return (
      <Fragment>
        <Friend friendsData={this.state.friendsData} />
      </Fragment>
    );
  }
}

export default App;
