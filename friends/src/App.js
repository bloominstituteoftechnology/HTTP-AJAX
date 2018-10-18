import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import FriendsList from "./components/FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      nameText: "",
      ageText: "",
      emailText: ""
    };

    this.saveFriend = this.saveFriend.bind(this);
    this.updateFriend = this.updateFriend.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
    this.idHandler = this.idHandler.bind(this);
  }

  eventHandler(ev) {
    ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  idHandler(ev, ident) {
    ev.preventDefault();
    this.setState({
      id: ident
    });
    console.log(this.state);
  }

  saveFriend(ev) {
    // ev.preventDefault();
    const friends = {
      name: this.state.nameText,
      age: this.state.ageText,
      email: this.state.emailText
    };
    axios
      .post("http://localhost:5000/friends", friends)
      .then(res => {
        console.log("RESPONSE", res);
      })
      .catch("Error");
  }

  updateFriend(ev) {
    // ev.preventDefault();

    const id = Number(this.state.id);

    if (
      this.state.nameText !== "" &&
      this.state.ageText !== "" &&
      this.state.emailText !== ""
    ) {
      const friend = {
        id: this.state.id,
        name: this.state.nameText,
        age: this.state.ageText,
        email: this.state.emailText
      };
      axios
        .put(`http://localhost:5000/friends/${id}`, friend)
        .then(res => {
          console.log("RESPONSE", res);
        })
        .catch(err => {
          console.log("ERROR", err);
        });
    } else {
      alert("Please fill in each input field");
    }
  }

  deleteFriend(ident) {
    axios
    .delete(`http://localhost:5000/friends/${ident}`)
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          // nameHandler={this.nameHandler}
          // ageHandler={this.ageHandler}
          // emailHandler={this.emailHandler}
          saveFriend={this.saveFriend}
          updateFriend={this.updateFriend}
          eventHandler={this.eventHandler}
        />

        {/* <Route path="/" render={props => <Form nameHandler={this.nameHandler} ageHandler={this.ageHandler} /> } /> */}
        <Route
          path="/"
          render={props => (
            <FriendsList
              {...props}
              idHandler={this.idHandler}
              updateFriend={this.updateFriend}
              deleteFriend={this.deleteFriend}
            />
          )}
        />

        {/* <FriendsList /> */}
      </div>
    );
  }
}

export default App;
