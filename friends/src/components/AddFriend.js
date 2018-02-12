import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }
  nameChange = (event) => {
    this.setState({name: event.target.value});
  }
  ageChange = (event) => {
    this.setState({age: event.target.value});
  }
  emailChange = (event) => {
    this.setState({email: event.target.value});
  }
  handleSubmit = (event) => {
    axios.post('http://localhost:5000/friends',{ 
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return(
        <form onSubmit={this.handleSubmit}>
          <label>Name: <input type="text" placeholder="Name" value={this.state.name} onChange={this.nameChange} /></label>
          <label>Age: <input type="text" placeholder="Age" value={this.state.age} onChange={this.ageChange} /></label>
          <label>Email: <input type="text" placeholder="Email" value={this.state.email} onChange={this.emailChange} /></label>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}

export default AddFriend;