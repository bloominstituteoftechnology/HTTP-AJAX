import React, { Component } from "react";
import "./App.css";
import Friendslist from "./components/Friendslist";
import axios from "axios";

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
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return <Friendslist friends={this.state.friends} />;
  }
}

export default App;
