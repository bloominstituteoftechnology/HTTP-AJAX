import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FriendForm from './FriendForm';

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      email: props.email,
      isEditing: false,
    };
    this.handleFriendForm = this.handleFriendForm.bind(this);
  }

  editFriend = () => {
      this.setState({isEditing: !this.state.isEditing});
  };

  handleFriendForm = (e) => {
      e.preventDefault();
      const {isEditing, ...rest} = this.state;
      let updatedFriend = Object.assign({id: this.props.id}, rest);
      this.props.handleFriendUpdate(updatedFriend);
      this.setState({isEditing: false});
  };

  handleInput = e => {
    let fieldName = e.target.name;
    let value = e.target.value;
    if (fieldName === 'age') value = parseInt(value, 10);
    this.setState({ [fieldName]: value });
  };

  presentEdit = () => {
      if (!this.state.isEditing) return null;
      return (
        <FriendForm
            nameInput={this.state.name}
            ageInput={this.state.age}
            emailInput={this.state.email}
            handleInput={this.handleInput}
            handleFriendForm={this.handleFriendForm}
        />
      );
  }
  render() {
  return (
    <div>
        <div>{`${this.props.name}, age: ${this.props.age}, email: ${this.props.email}`}</div>
        <button onClick={this.editFriend}>Edit</button>
        {this.presentEdit()}
        </div>)
  
  };
}
