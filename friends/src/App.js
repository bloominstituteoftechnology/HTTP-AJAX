import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList/FriendsList'
import AddFriend from './components/AddFriend/AddFriend'
import axios from 'axios';


class App extends Component {
  state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  }
  render() {
    return (
      <div className="App">
        <AddFriend onCreate={this.getFriends}/>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
  getFriends = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState({friends: response.data})})
    .catch(error => console.log('error message: ', error));
  }
  componentDidMount() {
    this.getFriends();
  }
}

export default App;
