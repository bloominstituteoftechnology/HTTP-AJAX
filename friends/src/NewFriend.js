import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Number } from 'core-js/library/web/timers';

class NewFriend extends Component {
  state = {
    newFriend: {
      name: '',
      age: Number,
      email: '',
    }
  }

  handleNameChange = event => {
    const name = event.target.value;
    this.setState({ newFriend: { 
      name: name,
      age: this.state.newFriend.age,
      email: this.state.newFriend.email
    } })
  }

  handleAgeChange = event => {
    const age = event.target.value;
    this.setState({
      newFriend: {
        name: this.state.newFriend.name,
        age: age,
        email: this.state.newFriend.email
      }
    })
  }

  handleEmailChange = event => {
    const email = event.target.value;
    this.setState({
      newFriend: {
        name: this.state.newFriend.name,
        age: this.state.newFriend.age,
        email: email
      }
    })
  }

    handleSubmit = event => {
      console.log(this.state.newFriend);
      // event.preventDefault()
      axios.post('http://localhost:5000/friends', {
        name: this.state.newFriend.name,
        age: this.state.newFriend.age,
        email: this.state.newFriend.email,
      })
      .then((response) => { })
      this.setState({
        newFriend: {
          name: '',
          age: '',
          email: ''
        }
      })
  }

  render() {
    return (
        <div>
          <form id="newFriendForm" onSubmit={this.handleSubmit}>
            <input className="newFriend-name" placeholder="Name" value={this.state.newFriend.name} onChange={this.handleNameChange}/>
            <input placeholder="Age" value={this.state.newFriend.age} onChange={this.handleAgeChange}/>
            <input placeholder="E-mail" value={this.state.newFriend.email} onChange={this.handleEmailChange}/>
          </form>
          <button type='submit' form='newFriendForm'>Submit</button>
        </div>
      );
    }
}



export default NewFriend;
