import React, { Component } from 'react';
import axios from 'axios';
import shortid from 'shortid';

import add from '../../assets/images/add.png';
import _ from './FriendsForm.module.css';

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', email: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', {
        id: shortid.generate(),
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {
        this.props.updateFriends(res.data);
        this.setState({ name: '', age: '', email: '' });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div className={_.add}>
          <img src={add} alt="add icon" />
          <div className={_.post}>Post</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange}
            name="name"
            required
          />
          <input
            type="number"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleChange}
            name="age"
            required
          />
          <input
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
            name="email"
            required
          />
        </form>
      </div>
    );
  }
}

export default FriendsForm;
