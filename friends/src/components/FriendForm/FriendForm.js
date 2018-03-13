import React, { Component } from 'react';
import axios from 'axios';
import Friends from '../Friends/Friends';

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
    this.addFriend = this.addFriend.bind(this);
  }

  render() {
    return (
      <div className="formDiv">
        <div className="formTitle">Add a New Friend:</div>
        <form className="formForm" onSubmit={this.addFriend}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="age" placeholder="Age" />
          <input type="text" name="email" placeholder="Email" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  async addFriend(event) {
    event.preventDefault();
    const friendInput = Array.from(event.target.querySelectorAll('input'));
    const newFriend = {
      id: this.state.friends.length + 1,
      name: friendInput[0].value,
      age: Number(friendInput[1].value),
      email: friendInput[2].value
    };
    event.target.reset();
    await axios
      .post('http://localhost:5000/friends', newFriend)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    await axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  }
}

export default FriendForm;
