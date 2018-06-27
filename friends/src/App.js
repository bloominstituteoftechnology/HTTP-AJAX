import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from "./FriendsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      name: "",
      age: "",
      email: ""
    };
  }

  handleSetData = data => this.setState({ friendsData: data });


  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({friendsData: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSubmitFriend = () => {
    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }
    axios
     .post("http://localhost:5000/friends", friend)
     .then(response => {
       this.setState({ friendsData: response.data, name: '' , age: '', email: ''});
     })
     .catch(error => console.log(error));
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleAgeChange = event => {
    this.setState({ age: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div className="App">
      <h1>List of Friends</h1>
      <form>
        <input type='text' value={this.state.name} onChange={this.handleNameChange} placeholder="Friends name" />
        <input type='text' value={this.state.age} onChange={this.handleAgeChange} placeholder="Friends age" />
        <input type='text' value={this.state.email} onChange={this.handleEmailChange} placeholder="Friends email" />

        <button onClick={this.handleSubmitFriend}>Add Friend</button>
      </form>
      <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
