import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendList from './components/FriendList';

class App extends Component {
  state = {
    friends: []
  };
  
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res => {
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log('Friends cannot render!')
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Friends! Hello, Friends!</h1>
      <FriendList
      friends={this.state.friends} />
      </div>
    );
  }
}

export default App;