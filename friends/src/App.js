import React, { Component } from 'react';
import axios from 'axios';
import FriendForm from './components/Friends/FriendForm';
import FriendsList from './components/Friends/FriendsList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      friendName: '',
      friendAge: '',
      friendEmail: ''
    };
  }

  onFriendChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data});
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="app">
        <FriendForm friendName={this.state.friendName} friendAge={this.state.friendAge} friendEmail={this.state.friendEmail} onFriendChange={this.onFriendChange} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
