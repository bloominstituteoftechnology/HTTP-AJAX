import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  };

  render() {
    return (
      <form onSubmit={this.postFriend}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInput}
        />
        <label htmlFor="age">Age</label>
        <input
          name="age"
          type="text"
          value={this.state.age}
          onChange={this.handleInput}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={this.state.email}
          onChange={this.handleInput}
        />
        <button type="submit">Save</button> 
      </form>
    );
  }
  handleInput = e => {
    let { name, value } = e.target;

    if (e.target.type === 'number') {
      value = Number(value);
    }
    this.setState({ [name]: value });

  };
  postFriend = (e) => {
    e.preventDefault();

    axios
    .post('http://localhost:5000/friends', this.state)
    .then(response => {
      console.log('respone', response);
      this.props.callBack();
    })
    .catch(error => {
      console.error('error', error);
    });
  }
}
export default AddFriend;
