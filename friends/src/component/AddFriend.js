// React Imports
import React, { Component } from 'react';
import { throws } from 'assert';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriendSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
      // Will run add new friend function to add friend
      this.props.addNewFriend(
        this.state.name,
        this.state.age,
        this.state.email
      );
      // Resets the above state to empty string again
      this.setState({
        name: '',
        age: '',
        email: ''
      });
    } else {
      alert('Missing Friend Information');
    }
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Friends Name..."
          value={this.state.name}
          name="name"
          onChange={this.onChangeHandler}
        />
        <input
          type="text"
          placeholder="Friends Age..."
          value={this.state.age}
          name="age"
          onChange={this.onChangeHandler}
        />
        <input
          type="text"
          placeholder="Friends Email..."
          value={this.state.email}
          name="email"
          onChange={this.onChangeHandler}
        />
        <button onClick={this.addFriendSubmit}>Add Friend</button>
      </form>
    );
  }
}

export default AddFriend;
