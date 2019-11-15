import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let name = this.state.name;
    let age = this.state.age;
    let email = this.state.email;
    let newFriend = {
      name,
      age,
      email
    };
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({ friends: res.data, name: '', age: '', email: '' });
        console.log(this.state.friends);
        this.props.updateFriends(this.state.friends);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="add-friend">
        <h3>Add a New Friend</h3>

        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />
          <label>Age</label>
          <input
            type="text"
            value={this.state.age}
            name="age"
            onChange={this.handleInputChange}
          />
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;