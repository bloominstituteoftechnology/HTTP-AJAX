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
      newName: "",
      newAge: "",
      newEmail: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(error => console.log(error));
  }

  nameChangeHandler = ev => {
    this.setState({ newName: ev.target.value });
  }

  ageChangeHandler = ev => {
    this.setState({ newAge: ev.target.value });
  }

  emailChangeHandler = ev => {
    this.setState({ newEmail: ev.target.value });
  }

  addNewFriend = ev => {
    ev.preventDefault();
  }

  render() {
    if (!this.state.friends.length) {
      return (<h2>Loading ...</h2>);
    }
    return (
      <div className="App">
        <FriendDisplay friends={this.state.friends} />
        <NewFriendForm 
          nameChangeHandler={this.nameChangeHandler}
          newName={this.state.newName} 
          ageChangeHandler={this.ageChangeHandler}
          newAge={this.state.newAge}
          emailChangeHandler={this.emailChangeHandler}
          newEmail={this.state.newEmail}
          newFriend={this.addNewFriend}
        />
      </div>
    );
  }
}

export default App;
