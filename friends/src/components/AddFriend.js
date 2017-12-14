import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  handleChangeName(event) {
    this.setState({name: event.target.value})
  }

  handleChangeAge(event) {
    this.setState({age: event.target.value})
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value})

  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChangeName} type='text' placeholder="Enter friend's name"></input>
          <input value={this.state.age} onChange={this.handleChangeAge} type='text' placeholder="Enter friend's age"></input>
          <input value={this.state.email} onChange={this.handleChangeEmail} type='email' placeholder="Enter friend's email"></input>
          <input type='submit' value='Submit'></input>
        </form>
    )
  }
}

export default connect( null, { addFriend } )(AddFriend);