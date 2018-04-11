import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Friend from "./components/Friend";
import FriendList from "./components/FriendList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  // handle new input as user types
  handleNewInput =(event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  // POST request handler
  handleCreateFriend = () => {
    const friend = { 
      name: this.state.name, 
      age: this.state.age, 
      email: this.state.email 
    }
    // POST request
    axios
      .post("http://localhost:5000/friends", friend)
      .then(savedFriend => {
        console.log(friend);
      })
      . catch(err => {
        console.log(err);
      });
    this.setState({ name: "", age: "", email: "" });
  }

  render() {
    // console.log('name', this.state.name);
    // console.log('age', this.state.age);
    // console.log('email', this.state.email);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        {/* Add friend with this form */}
        <form>
          <label>
            Name:
            <input type="text" onChange={this.handleNewInput} name="name" value={this.state.name} />
          </label>
          <label>
            Age:
            <input type="text" onChange={this.handleNewInput} name="age" value={this.state.age} />
          </label>
          <label>
            Email:
            <input type="text" onChange={this.handleNewInput} name="email" value={this.state.email} />
          </label>
          <button type="button" onClick={this.handleCreateFriend}>Create Friend</button>
        </form>
        {/* Routes Here */}
        <Route exact path="/" component={FriendList} />
        <Route path="/friends/:id" component={Friend} />
      </div>
    );
  }
}

export default App;
