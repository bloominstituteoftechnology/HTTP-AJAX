import React, { Component } from 'react';

class FriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }
    render() {
        return (
            <form onSubmit = {this.submitNewFriend}>
            <input type = 'text' value = {this.state.name} onChange = {this.handleNameChange} placeholder='Enter Name' />
            <input type = 'text' value = {this.state.age} onChange = {this.handleAgeChange} placeholder = 'Enter Age' />
            <input type = 'text' value = {this.state.email} onChange = {this.handleEmailChange} placeholder = 'Enter E-mail' />
            <button onSubmit={this.submitNewFriend}>Save Friend</button>
            </form>
        )
    }
    handleNameChange = (event) => {
        this.setState({
          newName: event.target.value,
        })
      }
    
      handleAgeChange = (event) => {
        this.setState({
          newAge: event.target.value,
        })
      }
    
      handleEmailChange = (event) => {
        this.setState({
          newEmail: event.target.value,
        })
      }
    
      submitNewFriend = (event) => {
        event.preventDefault();
        const newFriend = {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email,
        }
    }
}

export default FriendForm;