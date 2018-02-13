import React from 'react'
import axios from 'axios';

class AddFriend extends React.Component {
  state = {
      name: '',
      age: '',
      email: '',
  };

  handleInputChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, age, email } = this.state;
      axios
      .post('http://localhost:5000/friends', { name, age, email })
      .then((result) => {
        this.props.updateFriends();
        console.log(result);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Add Friend: </label>
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={this.handleInputChange}
            required
          />
          <input
            name="age"
            placeholder="Age"
            type="number"
            value={age}
            onChange={this.handleInputChange}
            required
          />
          <input
            name="email"
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default AddFriend;