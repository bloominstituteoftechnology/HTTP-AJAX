import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      friend: [],
    }
  }

  setInputVal = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewFriend = e => {
    e.preventDefault();

    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age:  this.state.age,
      email:  this.state.email
    })
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={ this.state.inputVal }
            onChange={ this.setInputVal }
          />

          <input
            type='text'
            name='age'
            placeholder='age'
            value={ this.state.inputVal }
            onChange={ this.setInputVal }
          />

          <input
            type='text'
            name='email'
            placeholder='email'
            value={ this.state.inputVal }
            onChange={ this.setInputVal }
          />
          
          <input
            type='submit'
            name='submit'
            value='Search'
            onClick={ this.addNewFriend }
          />
        </form>
      </div>
    )
  }
}