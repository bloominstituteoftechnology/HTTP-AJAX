import React, { Component } from 'react';
import axios from 'axios';

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmitFriend = e => {
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })
      .then(response => {
        this.props.updateFriends(response.data);
      })
      .catch(err => console.log(err));
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}
