import React, { Component, Fragment } from "react";
import FriendsList from "./components/Friends/FriendsList";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log("GIT RESPONSE", response);
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  render() {
    return (
      <Fragment>
        <FriendsList />
      </Fragment>
    );
  }
}

export default App;
