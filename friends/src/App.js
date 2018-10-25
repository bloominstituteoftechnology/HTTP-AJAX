import React, { Component } from "react";
import logo from "./d2rdDroidEmoji.png";
import "./App.css";
import axios from "axios";

import FriendForm from "./FriendForm";
import FriendList from "./FriendList";

class App extends Component {
  // moved state, submitHandler and handleInputchange from friendForm so friendList can access
  state = {
    name: "",
    age: "",
    email: "",
  };

  submitHandler = () => {
    // event.preventDefault(); // prevents reload
    // const newFriend = { ...this.state.name, this.state.age }; // makes copy of state then overrides age
    // REMOVED additional copy  of state is NOT NEEDED.

    // command to create the data
    axios
      .post("http://localhost:5000/friends", this.state)
      .then(response => {
        console.log("post worked", response);
      })
      .catch(error => {
        console.error("Error making post", error);
      });
  };

  handleInputChange = event => {
    // event.target is an object that represents the input
    const { name, value } = event.target; // destructuring

    // const name = event.target.name;
    // let value = event.target.value; // using `let` because value will change

    // console.log("input name:", event.target.name); // show the value of input when it changes
    console.log(this.state, name, value);

    this.setState({ [name]: value }); // name is a variable
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <br />
          <p>Welcome to d2rd Friends</p>
          <a
            className="App-link"
            href="https://linkedin.com/in/gddaniel"
            target="_blank"
            rel="noopener noreferrer"
          >
            About D2rd
          </a>
        </header>
        <div className="App">
          <FriendForm
            handleInputChange={this.handleInputChange}
            // name={this.state.name}
            // age={this.state.age}
            // email={this.state.email}
            {...this.state} // faster way
            submitHandler={this.submitHandler}
          />
          <FriendList />
        </div>
      </div>
    );
  }
}

export default App;
