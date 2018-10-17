import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import Friends from "./components/Friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    const url = "http://localhost:5000/friends";
    axios
      .get(url)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => alert(err));
  }
  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
