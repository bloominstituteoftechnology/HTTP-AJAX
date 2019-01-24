import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
          this.setState({friends: response.data})
      })
      .catch(error => {
          console.error('Server Error', error);
      });
  }

  addFriend = friend => {
    const newFriend = {
      name: friend.name,
      age: friend.age,
      email: friend.email
    }
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => {
          this.setState({
              friends: response.data
          })
      })
      .catch(err =>{
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <FriendForm addFriend={this.addFriend} /> 
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
