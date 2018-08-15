import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Friends";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsList: []
    };
  }

  componentDidMount() {
    axios.get(url).then(response => {
      this.setState({
        friendsList: response.name.age.email,
      });
    });
  }

  render() {
    return (
      <div>
        <h4>Stuff</h4>
      </div>
    );
  }
}

export default App;
