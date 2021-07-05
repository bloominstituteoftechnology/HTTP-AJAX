import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendList from "./Components/FriendList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    return <FriendList data={this.state.data} />;
  }
}

export default App;
