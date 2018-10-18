import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import NewFriendForm from "./components/NewFriendForm";
import FriendDisplay from "./components/FriendDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: this.getBlankFriend()
    };
  }

  getBlankFriend() {
    return {
      name: "",
      age: "",
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  formChangeHandler = ev => {
    this.setState({ newFriend: {
      ...this.state.newFriend,
      [ev.target.name]: ev.target.value
    }});
  }

  addNewFriend = ev => {
    ev.preventDefault();
    this.setState({ newFriend: {
      ...this.state.newFriend,
      age: Number(this.state.newFriend.age)
    }});
    axios
      .post("http://localhost:5000/friends", this.state.newFriend)
      .then(response => this.setState({ 
        friends: response.data,
        newFriend: this.getBlankFriend()
      }))
      .catch(error => console.log(error));
  }

  deleteFriend = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (!this.state.friends.length) {
      return (<h2>Loading ...</h2>);
    }
    return (
      <div className="App">
        <FriendDisplay friends={this.state.friends} deleteFriend={this.deleteFriend} />
        <NewFriendForm 
          changeHandler={this.formChangeHandler}
          newFriend={this.state.newFriend}
          addNewFriend={this.addNewFriend}
        />
      </div>
    );
  }
}

export default App;
