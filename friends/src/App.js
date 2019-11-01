import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import axios from "axios";
import Friendlist from "./components/Friendlist";
import UserForm from "./components/UserForm";
import styled from "styled-components";

const blankFormValues = {
  name: "",
  age: "",
  email: ""
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    // fetch data from the api
    console.log("inside didmount");
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({
      friend: {
        ...this.state.friend,
        [event.target.name]: event.target.value
      }
    });
  };

  handleFriendSubmit = event => {
    event.preventDefault();
    console.log("firing");
    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(response => {
        console.log("Post response", response);
        this.setState({ friends: response.data, friend: blankFormValues });
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log("inside render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Attendance App</h1>
        </header>
        <UserForm
          // {...props}
          friend={this.state.friend}
          handleFriendSubmit={this.handleFriendSubmit}
          handleChange={this.handleChange}
        />
        <Friendlist friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
