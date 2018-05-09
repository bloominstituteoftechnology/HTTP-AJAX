import React, { Component } from "react";
import axios from "axios";
import Friends from "./components/Friends";
import NewFriends from "./components/NewFriends";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { friends: [] };
  }
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(info => {
      const friends = info.data;
      this.setState({ friends });
    });
  };
  handleSubmit = (nFriend) => {
    axios.get("http://localhost:5000/friends/", nFriend).then(info => {
      const friends = info.data;
      this.setState({ friends });
    });
  };

  render() {
    return <div />;
  }
}

export default App;
