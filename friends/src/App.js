import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddFriend from './Components/AddFriend';
import ListFriends from './Components/ListFriends';

class App extends Component {
  state = {
    friends:[],
    newFriend: {
      id: 99,
      name: '...',
      age: '...',
      email: '...',
    },
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <AddFriend newFriend={this.state.newFriend}/>
        <ListFriends friends={this.state.friends}/>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error => {
        console.log('EROOORRRRR');
      })
  }
}

export default App;
