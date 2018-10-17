import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
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
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.setState({ name: "", age: "", email: "" });
    window.location.reload();
  };
  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    window.location.reload();
  };
  render() {
    return (
      <div className="app">
        <header>
          <h1>Friends List</h1>
        </header>
        <FriendsList
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
        />
        <Form
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
