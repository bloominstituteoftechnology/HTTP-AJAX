import React, { Component } from "react";

import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err, "Ya done goofed"));
  }

  render() {
    return (
      <div className="App">
        <h1>Muh Friends</h1>
      </div>
    );
  }
}

export default App;
