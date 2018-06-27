import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friendName: '',
      friendAge: '',
      friendEmail: ''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log("HERE is your response", response);
      this.setState({friends: response.data});
    })
    .catch(err => {
      console.log("Error is ", err);
    })
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value});
  }

  handleSubmitFriend = e => {
    e.preventDefault();
    console.log("Hi there");
    const newFriend = { name:this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail};
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
        console.log("POST RESPONSE", response);
        this.setState({friends: response.data, friendName: '',
      friendAge: '', friendEmail: ''})
      })
      .catch(err => {
        console.log("POST ERROR is", err);
      })
  }

  render() {
    return (
      <div className="App">
        <form>
          Name: <input
          type="text"
          placeholder="Name"
          name="friendName"
          value={this.state.friendName}
          onChange={this.handleChange} />
          <br/>
          Age: <input
          type="number"
          placeholder="Age"
          name="friendAge"
          value={this.state.friendAge}
          onChange={this.handleChange} />
          <br/>
          Email: <input
          type="text"
          placeholder="Email"
          name="friendEmail"
          value={this.state.friendEmail}
          onChange={this.handleChange} />
          <button onClick={this.handleSubmitFriend}>Add Friend</button>
        </form>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
