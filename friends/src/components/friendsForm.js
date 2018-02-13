import React, { Component } from 'react';
import axios from 'axios';

 class FriendsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      newFriend: {
        id: '',
        name: '',
        age: '',
        email: '',
      },

    }
    updateFriend = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({ [name]: value });
    }

    addFriend = (event) => {
      const newFriend = {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      }
      axios
        .post('http://localhost:5000/friends', newFriend)
    }
  }
  render = () => {
    return (
      <ul className="friends_form">

        <form type='submit' onSubmit={this.addFriend}>
          <input type="text" name="name"
          value={this.state.name}
          onChange={this.updateFriend} />
        </form>
      
        }/>
      </ul>
    )
  }}
  export default FriendsForm;