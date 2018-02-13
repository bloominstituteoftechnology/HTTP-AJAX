import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      'name': '',
      'age': '',
      'email': '',
    }
  }

  handleChange = (event) => {
    const newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  onSubmit = (event) => {
    let { name, age, email } = this.state;
    axios
    .post('http://localhost:5000/friends', {name, age, email})
    .then((response) => {console.log(`Response: ${response}`)})
    .catch((error) => {console.log(`Error: ${error}`)})
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.onSubmit}>
          Name: <input type="text" name="name" value={name} onChange={this.handleChange}/> <br/>
          Age: <input type="text" name="age" value={age} onChange={this.handleChange}/> <br/>
          Email: <input type="text" name="email" value={email} onChange={this.handleChange}/> <br/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
} // Form component

export default Form;