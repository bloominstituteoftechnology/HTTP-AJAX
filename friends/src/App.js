import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './Components/FriendsList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(error => console.log(error));

  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}></FriendsList>
      </div>
    );
  }
}

export default App;
