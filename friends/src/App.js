import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Link} from 'react-router-dom';
import axios from 'axios';
import Friend from './components/Friend';


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
      <Router>
      <div className="App">
        <Route exact path="/" render={()=> <Friend friends={this.state.friends}/>}/>
        <form onSubmit={this.submitFriend}>
          <input type='text' name='name' onChange={this.handleInput} value={this.state.newFriend.name}/>
          <input type='text' name='age' onChange={this.handleInput} value={this.state.newFriend.age}/>
          <input type='text' name='email' onChange={this.handleInput} value={this.state.newFriend.email}/>
        </form>
        <div onClick={this.submitFriend}>Submit</div>

      </div>
      </Router>
    );
  }
}

export default App;
