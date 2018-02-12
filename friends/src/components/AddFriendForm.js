import React, { Component } from 'react';
import axios from 'axios';

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      ageValue: '',
      addressValue: '',
    };

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit = (event) => {
    axios
      .post('http://localhost:5000/friends', {
        name: this.state.nameValue,
        age: this.state.ageValue,
        email: this.state.addressValue,
      })
      .then((response) => {
        console.log('I posted a thing!');
        console.log(response);
      })
      .catch((error) => {
        console.log('I made an error :(');
        console.log(error);
      });  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.nameValue} name="nameValue" onChange={this.handleChange} />
          Age:
          <input type="text" value={this.state.ageValue} name="ageValue" onChange={this.handleChange} />
          Email:
          <input type="text" value={this.state.addressValue} name="addressValue" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}

export default AddFriendForm;