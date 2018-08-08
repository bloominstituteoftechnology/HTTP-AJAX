import React, { Component } from "react";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
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

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/friends", {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    });
    this.componentDidMount();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends List</h1>
        </header>
        <FriendForm onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
        <Friends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
