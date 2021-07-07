import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Friend from './components/Friend';
import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        const friends = response.data;
        this.setState({ friends });
      })
      .catch(err => console.log(err));
  }

  addFriend = newFriend => {
    const friends = [...this.state.friends, newFriend]
    this.setState({ friends })

  }

  axiosPost = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(console.log('Success'))
      .catch(err => console.log(err));
  };

  render() {
    
    return (
      <div className="App">
        <h1>Friends App</h1>
        <FriendList friends={this.state.friends} />
        <AddFriendForm friends={this.state.friends} addFriend={this.addFriend} />
        
      </div>
    );
  }
}

export default App;
