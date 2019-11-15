import React, { Component } from 'react';
import axios from 'axios';

class UpdateFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let { id } = this.props.friend;
    const updatedFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => this.props.updateFriends(res.data))
      .then(() => this.setState({ name: '', email: '', age: '' }))
      .catch(err => console.log(err));
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="add-friend">
        <h4>Update {this.props.friend.name}</h4>
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
          <button>Update {this.props.friend.name}</button>
        </form>
      </div>
    );
  }
}

export default UpdateFriend;