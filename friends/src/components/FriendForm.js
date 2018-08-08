import React, { Component } from 'react';
import axios from 'axios';

class FriendForm extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      email: this.state.email,
    };
    axios.post('http://localhost:5000/friends', newFriend)
          .then( res =>{
              this.setState({name: '', age: '', email: '',});
              this.props.update(res.data);
              this.props.history.push('/');
            }
          )
          .catch(err=> console.log(err));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          placeholder="Enter Name"
          onChange={this.handleInputChange}
        />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          name="age"
          id="age"
          value={this.state.age}
          placeholder="Enter Age"
          onChange={this.handleInputChange} />
        <label htmlFor="email">eMail: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={this.state.email}
          placeholder="Enter E-Mail"
          onChange={this.handleInputChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default FriendForm;
