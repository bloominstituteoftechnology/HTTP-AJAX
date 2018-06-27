import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  handleChange = event => {
    this.setState({
      name: event.target.value,
      age: event.target.value,
      email: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios.post(`http://localhost:5000/friends`, { friend })
      .then(response => {
        console.log({response});
        console.log(response.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.onChange} />
          </label>

          <label>
            Age:
            <input type="text" name="age" onChange={this.onChange} />
          </label>

          <label>
            Email:
            <input type="email" name="email" onChange={this.onChange} />
          </label>

          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;