import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Friends";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsList: [],
      name: "",
      age: null,
      email: "",
      editId: null
    };
  }

  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        this.setState(() => ({ friendsList: response.data }));
      })
      .catch(err => {
        console.log("Server Error");
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewFriend = () => {
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriendObj)
      .then(response => {
        this.setState({
          friendsList: response.data,
          name: "",
          age: "",
          email: "",
        });
      })
      .catch(err => console.log("Error: NOT FOUND"));
  };

  editFriend = id => {
    const updatedFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
      .then(response => {
        this.setState({
          friendsList: response.data
        });
      })
      .catch(err => console.log("Error: NOT FOUND"));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friendsList: response.data
        });
      })
      .catch(err => console.log("Error: NOT FOUND"));
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <Friends
              edit={this.editFriend}
              delete={this.deleteFriend}
              friendsList={this.state.friendsList}
              {...props}
            />
          )}
        />
        <Form addNewFriend={this.addNewFriend} handleChange={this.handleChange} />
        {/* <form onSubmit={this.addNewFriend}>
          <input
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
            value={this.state.name}
            type="text"
          />
          <input
            onChange={this.handleChange}
            name="age"
            placeholder="Age"
            value={this.state.age}
            type="number"
          />
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="Email"
            value={this.state.email}
            type="email"
          />
        </form> */}
        {/* <button onClick={this.addNewFriend}>Add</button> */}
      </div>
    );
  }
}

export default App;
