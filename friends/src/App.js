import React, { Component } from "react";
import { Route } from "react-router-dom";
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

  render() {
    console.log('name', this.state.name);
    console.log('age', this.state.age);
    console.log('email', this.state.email);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends List</h1>
        </header>
        {/* Add friend with this form */}
        <form>
          <input type="text" onChange={this.handleNewInput} name="name" value={this.state.name} />
          <input type="text" onChange={this.handleNewInput} name="age" value={this.state.age} />
          <input type="text" onChange={this.handleNewInput} name="email" value={this.state.email} />
        </form>
        {/* Routes Here */}
        <Route exact path="/" component={FriendList} />
        <Route path="/friends/:id" component={Friend} />
      </div>
    );
  }
}

export default App;
