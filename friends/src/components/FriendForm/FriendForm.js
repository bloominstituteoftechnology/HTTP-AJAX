import React, { Component } from 'react';
import axios from 'axios';
import './FriendForm.css';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  updateFriend = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    };

    axios.post('http://localhost:5000/friends', newFriend).then(response => {
      this.props.getFriends();
    });

    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render = () => {
    return (
      <div className="friend__form">
        <form type="submit" onSubmit={this.addFriend}>
          <div className="form__text">Add a new Friend!</div>
          <input
            type="text"
            className="form__input"
            placeholder="Name"
            onChange={this.updateFriend}
            name="name"
            value={this.state.name}
          />
          <input
            type="text"
            className="form__input"
            placeholder="Age"
            onChange={this.updateFriend}
            name="age"
            value={this.state.age}
          />
          <input
            type="text"
            className="form__input"
            placeholder="Email"
            onChange={this.updateFriend}
            name="email"
            value={this.state.email}
          />
          <input type="submit" value="submit" className="form__button" />
        </form>
      </div>
    );
  };
}

export default FriendForm;
