import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";

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
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  selectFriend = friend => {
    const updatedFriend = {
      name: friend.name,
      age: friend.age,
      email: friend.email
    };
    this.setState(updatedFriend);
  };

  addNewFriend = () => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = id => {
    const updatedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="app">
        <h1>List of Friends</h1>
        <form className="form">
          <input
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            placeholder="Name"
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="age"
            value={this.state.age}
            placeholder="Age"
            type="number"
          />
          <input
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            placeholder="Email"
            type="email"
          />
          <br />
          <button className="button" onClick={this.addNewFriend}>
            Add Friend
          </button>
        </form>
        <button className="button" onClick={id => this.updateFriend(id)}>
          Update Friend
        </button>
        <FriendsList
          friends={this.state.friends}
          handleClick={this.selectFriend}
        />
      </div>
    );
  }
}

export default App;
