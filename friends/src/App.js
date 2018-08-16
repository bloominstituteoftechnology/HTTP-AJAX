import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friends from "./Friends";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friendsList: [],
      name: "",
      age: null,
      email: "",
      editId: null,
      deleteId: null,
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addNewFriend = () => {
    const newFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.post('http://localhost:5000/friends', newFriendObj)
    .then(response => {
        this.setState({
          friendsList: response.data,
        })
      })
    .catch((err) => console.log(err))
  }

  editFriend = (id) => {
    axios.put(`http://localhost:5000/friends${id}`)
    .then(response => {
      this.setState({
        friendsList: response.data,
      })
    })
  .catch((err) => console.log(err))
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends${id}`)
    .then(response => {
      this.setState({
        friendsList: response.data,
      })
    })
  .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <Friends friendsList={this.state.friendsList} {...props} />
          )}
        />

        <form onSubmit={this.addNewFriend}>
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
        </form>
        <button onClick={this.addNewFriend}>Add</button>
        <button onClick={() => this.editFriend(this.state.editId)}>Edit</button>
        <button onClick={() => this.deleteFriend(this.state.deleteId)}>Delete</button>
      </div>
    );
  }
}

export default App;
