import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList'
import FriendAdd from './components/FriendAdd'
import { Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newName: '',
      newAge: '',
      newEmail: ''
    }
  }

  handleName = e =>{
    this.setState({newName: e.target.value})
  }

  handleAge = e =>{
    this.setState({newAge: e.target.value})
  }

  handleEmail = e =>{
    this.setState({newEmail: e.target.value})
  }

  handleSubmit = e =>{
    e.preventDefault();

    const newFriend = {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail            
    }

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({friends: res.data});
          
      })
      .then(this.setState({newName: '', newAge: '', newEmail: ''}))
      .catch(err => {
          console.log(err);
      })
          
  }

  render() {
    return (
      <div>
        <Route exact path = '/' render= {(props) => 
        <FriendAdd {...props}
          handleAge = {this.handleAge} 
          handleEmail = {this.handleEmail} 
          handleName = {this.handleName}
          handleSubmit = {this.handleSubmit} 
          name ={this.state.newName}
          age ={this.state.newAge}
          email ={this.state.newEmail}
        /> } />
        <Route path = '/' component = {FriendList} />
      </div>
      
    );
  }
}

export default App;
