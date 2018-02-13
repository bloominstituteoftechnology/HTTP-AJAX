import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }
  handleInputChange = (event) => {
    // const { name, value } = event.target; // destructuring
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === 'number') {
      value = Number(value);
    }
    this.setState({ [name] : value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', this.state)
    .then((response) => {
      console.log(response);
      this.setState({
        name: '',
        age: '',
        email: '',
      })
      this.props.onCreate();
    })
    .catch((error) => {
      console.error('Error saving data');
    })
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <label>Name: <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleInputChange} /></label>
          <label>Age: <input type="number" placeholder="Age" name="age" value={this.state.age} onChange={this.handleInputChange} /></label>
          <label>Email: <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} /></label>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default AddFriend;