import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';


class App extends React.Component {
  state = {
    friends: [],
    newFriend: {
        name: '',
        age: '',
        email: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      newFriend: { ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
  }

  submitFriend = () => {
    let newFriend = this.state.newFriend;
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(response => this.setState({friends: response.data}))
  }

  componentDidMount(){
    axios
        .get(' http://localhost:5000/friends')
        .then(response => this.setState({friends: response.data}))
  }



  render() {
    return (
      <div className="App">
        <div className="friends-list">
          {this.state.friends.map(friend => (
            <div>
            <h1>{friend.name}</h1>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            </div>

          ) )}
        </div>
        <form onSubmit={this.submitFriend}>
          <input type='text' name='name' onChange={this.handleInput} value={this.state.newFriend.name}/>
          <input type='text' name='age' onChange={this.handleInput} value={this.state.newFriend.age}/>
          <input type='text' name='email' onChange={this.handleInput} value={this.state.newFriend.email}/>

        </form>
        <div onClick={this.submitFriend}>Submit</div>

      </div>
    );
  }
}

export default App;
