import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    this.getFriends();
  }
  
  getFriends = () => {
    axios
      .get("http://localhost:5000/friends/")
      .then(response => {
          // console.log(response.data);
          this.setState({ friends: response.data });
      })
      .catch(err => {
          console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Amanda's Friends project for HTTP/AJAX.</h1>
        </header>
        <ul className="FriendsList">
        {this.state.friends.map(friend => {
          return(
            <li key={friend.id} className="friend">
                <div className="friend-name"> {friend.name} </div>
                <div className="friend-age"> {friend.age} </div>
                <div className="friend-email"> {friend.email} </div>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default App;