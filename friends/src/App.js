import React, { Component } from "react";
import Friends from "./components/Friends";
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
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.error("Server Error:", err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
