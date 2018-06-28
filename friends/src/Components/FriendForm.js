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
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const friend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    console.log(friend);

    axios.post(`http://localhost:5000/friends`, friend)
      .then(response => {
        this.setState({friend})
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
            <input type="text" name="name" onChange={this.handleChange} />
          </label>

          <label>
            Age:
            <input type="text" name="age" onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} />
          </label>

          <button type="submit">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;