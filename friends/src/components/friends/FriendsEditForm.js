import React, { Component } from 'react';
import axios from 'axios';

class FriendsEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', name: '', age: '', email: '' };
	}

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`${this.props.URL}/${this.state.id}`, {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(res => {
        this.props.updateFriends(res.data);
        this.setState({ id: '', name: '', age: '', email: '' });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
			<input
          type="text"
          value={this.state.id}
          placeholder="ID"
          onChange={this.handleChange}
          name="id"
          required
        />
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
        <button type="submit">Edit</button>
      </form>
    );
  }
}

export default FriendsEditForm;
