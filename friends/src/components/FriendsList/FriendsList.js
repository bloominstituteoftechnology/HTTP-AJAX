import React, { Component } from 'react';
import Friend from '../Friend/Friend';
import axios from 'axios';
import './FriendsList.css';

class FriendsList extends Component {
    constructor() {
      super();
      this.state = {
        friends: [{name: 'Loading Friends...'}],
        newFriend: {
          name: '',
          age: '',
          email: '',
      }
    }
    this.addNewFriend = this.addNewFriend.bind(this);
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleAgeChange = this.handleAgeChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';
    axios.get(endpoint)
      .then((res) => { this.setState({friends: res.data })})
      .catch(err => { console.log(err) })
  }

  // handleNameChange(event) {
  //   const newFriendName = event.target.value;
  //   this.setState({
  //     newFriend: {
  //       name: newFriendName,
  //       age: this.state.newFriend.age,
  //       email: this.state.newFriend.email,
  //     }
  //   })
  // }
  //
  // handleAgeChange(event) {
  //     const newFriendAge = event.target.value;
  //     this.setState({
  //       newFriend: {
  //         name: this.state.newFriend.name,
  //         age: newFriendAge,
  //         email: this.state.newFriend.email,
  //       }
  //     })
  // }
  //
  // handleEmailChange(event) {
  //   const newFriendEmail = event.target.value;
  //   this.setState({
  //     newFriend: {
  //       name: this.state.newFriend.name,
  //       age: this.state.newFriend.age,
  //       email: newFriendEmail,
  //     }
  //   })
  // }
  //
  addNewFriend(event) {
    event.preventDefault();
    const endpoint = 'http://localhost:5000/friends';
    const newFriend = this.state.newFriend;
    axios.post(endpoint, newFriend)
      .then(res => { this.setState({ friends: res.data }) })
      .catch(err => { console.log(err)});
    this.setState({
      newFriend: {
        name: null,
        email: null,
        age: null,
      }
    });
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const newFriend = this.state.newFriend;
    newFriend[name] = value;
    this.setState({ newFriend, })

  }

  removeFriend(event) {
    const id = event.target.id;
    const endpoint = 'http://localhost:5000/friends';
    axios.delete(endpoint + '/' + id)
      .then(res => { this.setState({ friends: res.data })})
  }


  render() {
    return(
      <div>
        <h1>FriendsList</h1>
        <form onSubmit={this.addNewFriend}>
          <input type="string" placeholder='Name' onChange={this.handleInputChange} name='name' required></input>
          <input type='number' placeholder='Age' onChange={this.handleInputChange} name="age" required></input>
          <input type='email' placeholder='Email' onChange={this.handleInputChange} name="email" required></input>
          <button onClick={this.addNewFriend}>Add</button>
        </form>
        <Friend friends={this.state.friends} removeFriend={this.removeFriend}/>
      </div>
    )
  }
}


export default FriendsList;
