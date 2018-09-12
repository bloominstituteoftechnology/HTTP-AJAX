import React, { Component } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import "./App.css";

class App extends Component {
  state = {
    friendsData: [],
    name: "",
    age: "",
    email: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            placeholder="name..."
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="age..."
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="email..."
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </form>
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
