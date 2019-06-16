import React, { Component } from 'react';
import './App.css';
import FriendsList from './FriendsList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: {
        name: '',
        age: '',
        email: '',
      }
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friendsData: response.data });
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  handleNameChange = e => {
    this.setState({ friend: Object.assign({}, this.state.friend, { name: e.target.value }) })
  }

  handleAgeChange = e => {
    this.setState({ friend: Object.assign({}, this.state.friend, { age: e.target.value }) })
  }

  handleEmailChange = e => {
    this.setState({ friend: Object.assign({}, this.state.friend, { email: e.target.value }) })
  }

  submitNewFriend = e => {
    e.preventDefault()
    // const friend = { friend: this.state.friend};
    const friend = { ...this.state.friend };
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => {
        console.log(response);
        this.setState({ friendsData: response.data, friend:{name:'', age:'', email:''} })
      })
      .catch(error => console.log('error: ', error));
  }

  
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <form>
          <h3>New Friend:</h3>
          <input type='text' placeholder='Enter name here' onChange={this.handleNameChange} value={this.state.friend.name} />
          <input type='number' placeholder='Enter age here' onChange={this.handleAgeChange} value={this.state.friend.age} />
          <input type='text' placeholder='Enter email here' onChange={this.handleEmailChange} value={this.state.friend.email} />
          <button onClick={this.submitNewFriend}>Submit New Friend</button>
        </form>
        <h3>List of Friends:</h3>
        <FriendsList 
          friends={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;
