import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      age: '',
      email: '',
      }
    };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.addNewFriend}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Age:
            <input
              name="age"
              type="text"
              value={this.state.age}
              onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}/>
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
    );
  }

  handleChange = event => {
    const target = event.target;

    if (target.name === 'name') return this.setState({name: target.value});
    if (target.name === 'age') return this.setState({age: target.value});
    if (target.name === 'email') return this.setState({email: target.value});
  };

  addNewFriend = event =>  {
    event.preventDefault();

    axios
    .post('http://localhost:5000/friends', this.state )  
    .then(response => {
      console.log(response);
      this.setState({
        name: '',
        age: '',
        email: '',
      });
      this.props.onCreate();
    })
    .catch(error => {
      console.log(error);
    });
  };

}

export default AddFriend;