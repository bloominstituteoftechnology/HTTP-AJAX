import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from "./ListOfFriends";
class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(response => {
      console.log(response);
      this.setState({friendsData: response.data})
    });
  }

  addFriend = e => {
    this.setState({ friend: e.target.value });
  };

  submitFriend = () => {
    const friend = { friend: this.state.name};
    axios
      .post('http://localhost:5000', friend)
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(error => console.log(error));
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" placeholder="friend name" onChange={this.addFriend} name="friend" value={this.state.friend} />
        <button onClick={this.submitFriend}>Submit Friend</button>
        <FriendsList friends={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
