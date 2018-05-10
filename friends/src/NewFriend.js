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
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="friend-name">Name:
            <input type="text" name="name" id="friend-name" value={name} onChange={this.props.onChange} />
          </label>
          <label htmlFor="friend-age">Age:
            <input type="number" name="age" id="friend-age" value={age}  onChange={this.props.onChange} />
          </label>
          <label htmlFor="friend-email">Email:
            <input type="text" name="email" id="friend-email" value={email} onChange={this.props.onChange} />
          </label>
          <button type="submit">Add Friend</button>
        </form>
      );
  }  
}

export default NewFriend;