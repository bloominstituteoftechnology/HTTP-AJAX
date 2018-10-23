import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './Components/FriendsList';

class App extends Component {

  state = {
    friendData: [],
    name: '',
    age: '',
    email: '',
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends').then(response => {
        this.setState({ friendData: response.data});
      }).catch(err => {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friendData} />

      </div>
    );
  }
}

export default App;
