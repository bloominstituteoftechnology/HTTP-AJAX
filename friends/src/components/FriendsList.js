import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friend';

export class FriendsList extends Component {
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: '',
      email: '',
    },
    id: 10000,
    nameInput: '',
    ageInput: '',
    emailInput: '',
  };

  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then((response) => this.setState({ friends: response.data }))
      .catch((error) => console.log(error));
  };

  changeHandler = (event) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value,
      },
    });
  };

  addFriend = (event) => {
    event.preventDefault();
    const newFriend = this.state.newFriend;
    newFriend.id = this.state.id;
    newFriend.name = this.state.nameInput;
    newFriend.age = parseInt(this.state.ageInput);
    newFriend.email = this.state.emailInput;
    this.setState({
      friends: [...this.state.friends, newFriend],
      id: this.state.id + 1,
      nameInput: '',
      ageInput: '',
      emailInput: '',
    });
  };

  render() {
    return (
      <div>
        {this.state.friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
        <form action="">
          <input
            type="text"
            placeholder="What's your friend's name?"
            name="name"
            onChange={this.changeHandler}
            value={this.state.newFriend.name}
          />
          <input
            type="number"
            placeholder="How old is your friend?"
            name="age"
            onChange={this.changeHandler}
            value={this.state.newFriend.age}
          />
          <input
            type="text"
            placeholder="What's your friend's email address?"
            name="email"
            onChange={this.changeHandler}
            value={this.state.newFriend.email}
          />
          <button type="submit" onClick={this.addFriend}>
            Add Friend!
          </button>
        </form>
      </div>
    );
  }
}

export default FriendsList;
