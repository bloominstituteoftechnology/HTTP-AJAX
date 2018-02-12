import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import FriendList from './components/FriendList.js';
import AddFriendForm from './components/AddFriendForm.js';

class App extends Component {
  state = {
    friends: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MyBook</h1>
        </header>
        <FriendList
          friends={this.state.friends}
        />
        <AddFriendForm />
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(error => {
        console.log('there was an error', error);
      });
  }
}

export default App;
