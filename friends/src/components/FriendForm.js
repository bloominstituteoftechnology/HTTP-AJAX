import React, { Component } from 'react';
import axios from 'axios';
import Link from 'react-router-dom';
export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  addNewFriend = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
      axios
        .post('http://localhost:5000/friends', {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        })
        .then(response => {
          this.setState(() => ({
            friends: response.data,
            name: '',
            age: '',
            email: ''
          }));
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.addNewFriend}>
        <input
          autoFocus
          value={this.state.name}
          onChange={this.changeHandler}
          placeholder="Add New Friend"
          name="name"
          autoComplete="off"
        />
        <input
          autoFocus
          value={this.state.age}
          onChange={this.changeHandler}
          placeholder="Age"
          name="age"
          autoComplete="off"
        />
        <input
          autoFocus
          value={this.state.email}
          onChange={this.changeHandler}
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <button type="submit">Add New Friend</button>
      </form>
    );
  }
}
