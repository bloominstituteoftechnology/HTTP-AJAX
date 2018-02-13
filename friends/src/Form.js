import React from "react";
import axios from "axios";

class Form extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />

        <button type="submit">Save New Friend</button>
      </form>
    );
  }

  handleInputChange(event) {
    let { name, value } = event.target; // ES6, destructuring
    if (event.target.type === 'number') value = Number(value);
    this.setState({ [name]: value }); // [can pass the value of it into an object]
  }

  submitHandler = event => {
    event.preventDefault(); // use every time you do a form submit
    // sets everything in state in newFriend --> second parameter allows overwrite of a key/value pair
    // const newFriend = { ...this.state, age: Number(this.state.age) };
    axios
      .post('http://localhost:5000/friends', this.state)
      .then(response => {
        console.log('response from post', response);
      })
      .catch(error => {
        console.error('error saving the data', error);
      });
  };
}

export default Form;

/*
<form onSubmit={this.props.addFriend}>
  <input type='text' id='name' placeholder='Name' />
  <input type='text' id='age' placeholder='Age' />
  <input type='text' id='email' placeholder='Email' />
  <input type='submit' value='Submit' />
</form>
*/
