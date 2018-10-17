import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  }

  handleSubmitNewFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.friend)
      .then(response => {
        this.setState({
          friends: response.data,
          friend: {
            name: '',
            age: '',
            email: ''
          }
        });
        console.log(response)
      })
      .catch(err => console.log(err));
  }

  render() {
    const { friends, friend } = this.state;
    return (
      <div className="App">
        <NewFriend
          newFriend={friend}
          handleChange={this.handleChange}
          submitNewFriend={this.handleSubmitNewFriend}
        />
        <FriendsList friends={friends} />
      </div>
    );
  }
}

export default App;
