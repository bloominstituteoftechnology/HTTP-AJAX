import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import FriendCard from "./components/FriendCard";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "", //is it fine to initiate to null ?
        email: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  addNewFriend(e) {
    console.log(" i was clicked!!!");
    e.preventDefault();

    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response =>
        this.setState({ friends: response.data }, this.clearInputs())
      )
      .catch(err => console.log(err));
    console.log(this.state.newFriend);
  }

  clearInputs() {
    this.state.newFriend.name = "";
    this.state.newFriend.age = "";
    this.state.newFriend.email = "";
  }

  handleChange(event) {
    // handle change
    let nf = {
      ...this.state.newFriend,
      [event.target.name]: event.target.value
    };
    this.setState({ newFriend: nf });
  }
  render() {
    return (
      <div className="App">
        <h1>Friends:</h1>
        <FriendForm
          handleChange={this.handleChange.bind(this)}
          addNewFriend={this.addNewFriend.bind(this)}
          newFriend={this.state.newFriend}
        />
        <div className="friends-container">
          {this.state.friends.map(friend => (
            <FriendCard friend={friend} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
