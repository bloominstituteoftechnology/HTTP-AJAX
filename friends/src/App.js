import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
import { Route } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:5000/friends";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: [],
      newName: "",
      newAge: "",
      newEmail: ""
    };
  }

  componentDidMount() {
    // console.log("testing axios")
    axios.get(url).then(response => {
      this.setState({
        friendsList: response.data
      });
    });
  }

  handleUpdate = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("Got to handle submit: ", event)
    const newInfo = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    };
    axios
      .post(url, newInfo)
      .then(response => {
        this.setState({
          friendsList: response.data
        });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  //possibily need an if statement

  editFriend = id => {
    // console.log("EditFriend: ", id);
    // // const editInfo = {

    // // };
    const updatedInfo = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail
    }

    axios
      .put(`${url}/${id}`, updatedInfo)
      .then(response => {
        this.setState({
          friendsList: response.data
        });
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  deleteFriend = id => {
    console.log("deleteFriend:", id);
    axios
      .delete(`${url}/${id}`)
      .then(response => {
        this.setState({
          friendsList: response.data
        });
      })
      .catch(error => {
        console.error("Error: ", error);
      });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={props => {
            return (
              <FriendForm
                {...props}
                nameAdd={this.state.newName}
                ageAdd={this.state.newAge}
                emailAdd={this.state.newEmail}
                handleUpdate={this.handleUpdate}
                handleSubmit={this.handleSubmit}
              />
            );
          }}
        />
        <Route
          path="/"
          component={props => {
            return (
              <Friends
                {...props}
                friendsList={this.state.friendsList}
                deleteFriend={this.deleteFriend}
                editFriend={this.editFriend}
              />
            );
          }}
        />
        {/* <Friends friends={this.state.friendsList}/>  */}
      </div>
    );
  }
}

export default App;
