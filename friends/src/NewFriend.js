import React, { Component } from 'react';
import axios from 'axios';

class NewFriend extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: this.props.name,
        age: this.props.age,
        email: this.props.email,
      };
  }

  render() {
    const { name, age, email } = this.state;
      return (
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="friend-name">Name:
            <input type="text" name="name" id="friend-name" value={name} onChange={this.props.handleChange} />
          </label>
          <label htmlFor="friend-age">Age:
            <input type="number" name="age" id="friend-age" value={age}  onChange={this.props.handleChange} />
          </label>
          <label htmlFor="friend-email">Email:
            <input type="text" name="email" id="friend-email" value={email} onChange={this.props.handleChange} />
          </label>
          <button type="submit">Add Friend</button>
        </form>
      );
  }  
}

export default NewFriend;