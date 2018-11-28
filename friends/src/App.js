import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './Components/FriendsList'
import FriendForm from './Components/FriendForm.js'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then( res => {
        console.log(res.data);
        this.setState({
          friends: res.data,
        })
      })
      .catch(err => {
        console.log('ERR')
      })
  }

  addFriend = () => {
    axios.post('http://localhost:5000/friends', {
      name: 'yolo',
      id: 10,
      age: 1000,
      email: 'yolo@gmail.com'
    })
    .then( res => {
      this.setState({
        friends: res.data,
      })
    })
    .catach( err => console.log('ERR'))
  }

  render() {
    return (
      
      <div className="App">
        
        <FriendForm />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
