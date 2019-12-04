import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friends from './components/Friends';

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

  handleTextInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveFriendData = () => {
    const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
    axios
      .post("http://localhost:5000/friends/create", friend)
      .then(response => {
        console.log(response);
        this.getFriends();
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Amanda's Friends project for HTTP/AJAX.</h1>
        </header>
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="Name"
          name="name"
          value={this.state.name}
        />
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="Age"
          name="age"
          value={this.state.age}
        />
        <input
          type="text"
          onChange={this.handleTextInput}
          placeholder="Email"
          name="email"
          value={this.state.email}
        />
        <button onClick={this.saveFriendData}>Add Friend</button>
        {this.state.friends.map(friend => (
          <Friends friend={friend} getFriends={this.getFriends} />
        ))}
        {/* <ul className="FriendsList">
        {this.state.friends.map(friend => {
          return(
            <li key={friend.id} className="friend">
                <div className="friend-name"> {friend.name} </div>
                <div className="friend-age"> {friend.age} </div>
                <div className="friend-email"> {friend.email} </div> */}
            {/* </li>
          );
        })}
        </ul> */}
      </div>
    );
  }
}

export default App;