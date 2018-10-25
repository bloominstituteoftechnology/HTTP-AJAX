import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/friendList'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend:{
      name: '',
      age: '',
      email: ''
      }}
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
        newFriend: {
          ...this.state.newFriend,
        
      [event.target.name]: event.target.value
    }})
  }

  newFriend = event => {
    event.preventDefault();
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

  // updateFriend = () =>{
  //   axios
  //     .put(`http://localhost:5000/friends${this.state.newFriend}`,
  //     this.state.newFriend
  //     )
  //     .then(response => {
  //       this.setState({friends: response.data});
  //     })
  //     .catch(error => console.log('It\'s over! Turn back now!'))
  //   }
    
    deleteFriend = (event, id) =>{
      event.preventDefault();
      axios
        .put(`http://localhost:5000/friends${id}`,
        this.state.newFriend
        )
        .then(response => {
          this.setState({friends: response.data});
        })
        .catch(error => console.log('It\'s over! Turn back now!'))
      }

  render() {
    return (
      <div className="App">
      <form>
      <input 
          type='text' 
          placeholder='name' 
          name='name'
          onChange={this.changeHandler}
          value={this.state.name} >
      </input> <br/>

      <input 
          type='number' 
          placeholder='age' 
          name='age'
          onChange={this.changeHandler}
          value={this.state.age}>
      </input> <br/>

      <input 
          type='text' 
          placeholder='email' 
          name='email'
          onChange={this.changeHandler}
          value={this.state.email}>
      </input> <br/>

      <button onClick={this.newFriend}>
      Add Friend
      </button>
  </form>
  {this.state.friends.map(friends => (
    <FriendList friends = {friends} 
    handleClick = {this.selectedFriend}/>
  ))}
          </div>
    );
  }
}

export default App;
