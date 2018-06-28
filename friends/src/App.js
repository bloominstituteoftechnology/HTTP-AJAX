import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendsData: [],
      friend: {
        name: '',
        age: '',
        email: ''
      },
      blankFriend:{
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    axios
        .get("http://localhost:5000/friends")
        .then(response => {
          this.setState({friendsData:response.data})
        })
        .catch(err => {
          console.log(err);
        });
  }

  handleFriendSubmit = () => {
    const friend = this.state.friend;
    const blankFriend = this.state.blankFriend; 
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        this.setState({friendsData: response.data, friend: blankFriend});
      })
      .catch(error => console.log(error));
  };

  handleFriendName = e => {
    let nufriend = {...this.state.friend};
    nufriend.name = e.target.value;
    this.setState({friend:nufriend});
  };

  handleFriendAge = e => {
    let nufriend = {...this.state.friend};
    nufriend.age = e.target.value;
    this.setState({friend:nufriend});
  };

  handleFriendEmail = e => {
    let nufriend = {...this.state.friend};
    nufriend.email = e.target.value;
    this.setState({friend:nufriend});
  };


  render() {
    return (<div>
      <h1> My Friends </h1>
      <input
        type="text"
        placeholder="Name"
        onChange={this.handleFriendName}
        name="friend"
        value={this.state.friend.name}
        />
        <input
        type="text"
        placeholder='age'
        onChange={this.handleFriendAge}
        name="age"
        value={this.state.friend.age}
        />
        <input
        type="text"
        placeholder="Email"
        onChange={this.handleFriendEmail}
        name="email"
        value={this.state.friend.email}
        />
        <button onClick={this.handleFriendSubmit}> Add Friend </button>
      <FriendsList friends={this.state.friendsData}/>
    </div>);
  }
}

export default App;
