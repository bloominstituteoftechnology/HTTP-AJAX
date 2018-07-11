import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: ''
    };
  }

  componentDidMount() {
    axios
    .get("http://localhost:5000/friends")
    .then(response => {
      console.log("GET RESPONSE:", response);
     this.setState({ friendsData: response.data  });
    });
  }

  handleNameChange = e => {
    this.setState({ friend: e.target.value });
  };

  handleSubmitFriend = () => {
    const friend = {friend: this.state.friend};
    axios
    .post("http://localhost:5000/friends", { friend })
    .then(response => {
       console.log("POST RESPONSE", response);
       this.setState({ friendsData: response.data })
    })
    .catch(error => console.log(error));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HTTP-AJAX Friends</h1>
        </header>
        <div className="App-intro">
          <h1>Friends</h1>
          <input type="text" 
          placeholder="friend name"
          onChange={this.handleNameChange}
          name=""
          value={this.state.friend}
           />
           <button onClick={this.handleSubmitFriend}>Submit Friend</button>
          <FriendsList friends={this.state.friendsData} />
        </div>
      </div>
    );
  }
}

export default App;
