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

  formChangeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  addNewFriend = ev => {
    ev.preventDefault();
    let newFriend = {
      name: this.state.newName,
      age: Number(this.state.newAge),
      email: this.state.newEmail
    };
    axios.post("http://localhost:5000/friends", newFriend)
      .then(response => this.setState({ 
        friends: response.data,
        newName: "",
        newAge: "",
        newEmail: ""
    }));
  }

  render() {
    if (!this.state.friends.length) {
      return (<h2>Loading ...</h2>);
    }
    return (
      <div className="App">
        <FriendDisplay friends={this.state.friends} />
        <NewFriendForm 
          changeHandler={this.formChangeHandler}
          newName={this.state.newName} 
          newAge={this.state.newAge}
          newEmail={this.state.newEmail}
          newFriend={this.addNewFriend}
        />
      </div>
    );
  }
}

export default App;
