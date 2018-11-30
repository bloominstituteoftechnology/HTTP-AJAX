import React, { Component } from "react";
import "./App.css";
import Friendslist from "./components/Friendslist";
import axios from "axios";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  }

  addNewFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };
  editFriend = (friend, id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Friendslist
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          editFriend={this.editFriend}
        />
        <Form addNewFriend={this.addNewFriend} editFriend={this.editFriend} />
      </div>
    );
  }
}

export default App;
