import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {

  state = {
    friendsData: [],
    name: "",
    age: "",
    email: ""
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
        this.setState({ friendsData: response.data });
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
