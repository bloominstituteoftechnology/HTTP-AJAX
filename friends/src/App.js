import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Friends from './Friends.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [{name: "", age: "", email: "",}],
      showUpdateFriends: false,
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axios
      .get("http://localhost:3000/friends/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleTextInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveFriendData = () => {
    const friends = { name: this.state.friends.name, age: this.state.friends.age, email: this.state.friends.email };
    axios
      .post(`http://localhost:5000/friends`, friends)
      .then(savedFriend => {
        console.log(savedFriend);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends!</h1>
        </header>
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="name"
          name="name"
          value={this.state.name}
        />
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="age"
          name="age"
          value={this.state.age}
        />
         <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="email"
          name="email"
          value={this.state.email}
        />
        <button onClick={this.saveFriendData}>Create Friend</button>
      </div>
    );
  }
}

export default App;