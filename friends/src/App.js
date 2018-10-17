import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./components/Friends";
import Form from "./components/Form";

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
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
        <Form />
      </div>
    );
  }
}

export default App;
