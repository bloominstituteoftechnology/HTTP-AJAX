import React, { Component } from 'react';
import axios from 'axios';

class NewFriend extends Component {
  constructor() {
    super();
      this.state = {
        name: '',
        age: '',
        email: '',
      };
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { name, age, email } = this.state;

    axios.post('http://localhost:5000/friends', { "name":name, "age":age, "email":email })
  }

  render() {
    const { name, age, email } = this.state;
      return (
        <form onSubmit={this.onSubmit}>
          <label htmlFor="friend-name">Name:
            <input type="text" name="name" id="friend-name" value={name} onChange={this.onChange} />
          </label>
          <label htmlFor="friend-age">Age:
            <input type="number" name="age" id="friend-age" value={age}  onChange={this.onChange} />
          </label>
          <label htmlFor="friend-email">Email:
            <input type="text" name="email" id="friend-email" value={email} onChange={this.onChange} />
          </label>
          <button type="submit">Add Friend</button>
        </form>
      );
    }  
}

export default NewFriend;