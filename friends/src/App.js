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
      editId: null,
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
    .catch((err) => console.log("Error: NOT FOUND"))
  }

  editFriend = (id) => {
    const updatedFriendObj = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios.put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
    .then(response => {
      this.setState({
        friendsList: response.data,
      })
    })
  .catch((err) => console.log("Error: NOT FOUND"))
  }

  deleteFriend = (id) => {
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.setState({
        friendsList: response.data,
      })
    })
  .catch((err) => console.log("Error: NOT FOUND"))
  }

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => (
            <Friends edit={this.editFriend} delete={this.deleteFriend} friendsList={this.state.friendsList} {...props} />
          )}
        />
        <Route
        path="/"
        render={props => {
          return <Form 
          {...props}
          add={this.addNewFriend}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          />;
        }} 
        />   
      </div>
    );
  }
}

export default App;
