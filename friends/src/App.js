import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/friendList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Form from './components/form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
      }
    };
  

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});
      })
      .catch(error => console.log('It\'s over! Turn back now!'))
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addNewFriend = event => {
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
    axios
    .post('http://localhost:5000/friends', this.state.newFriend)
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(error => console.log('It\'s over! Turn back now!'))
  };

  selectNewFriend = friend => {
    const selectedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    }
    this.setState(selectedFriend)
  } 

//  updateFriend

  render() {
    return (
      <div className="App">
      {this.state.friends.map(friends => (
        <FriendList friends = {this.state.friends} 
        handleClick = {this.selectedFriend}/>
      ))}
      <form>
      <input 
          type='text' 
          placeholder='name' 
          onChange={this.changeHandler}
          value={this.state.name} >
      </input> <br/>

      <input 
          type='number' 
          placeholder='age' 
          onChange={this.changeHandler}
          value={this.state.age}>
      </input> <br/>

      <input 
          type='text' 
          placeholder='email' 
          onChange={this.changeHandler}
          value={this.state.email}>
      </input> <br/>

      <button onClick={this.newFriend}>
      Add Friend
      </button>
  </form>
          </div>
    );
  }
}

export default App;
