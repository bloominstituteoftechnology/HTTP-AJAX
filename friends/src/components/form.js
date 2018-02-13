import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  state = {
    'name': '',
    'age': '',
    'email': '',
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
    .catch((error) => {console.log(`Error: ${error}`)});
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div style={{border: '3px solid black', padding: '20px', height: '75px', margin: '-3px 0 0 0'}}>
        <form action="" onSubmit={this.onSubmit}>
          <input type="text" name="name" value={name} placeholder="Name" onChange={this.handleChange}/> <br/>
          <input type="number" name="age" value={age} placeholder="Age"onChange={this.handleChange}/> <br/>
          <input type="text" name="email" value={email} placeholder="Email"onChange={this.handleChange}/> <br/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
} // Form component

export default Form;