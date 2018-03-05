import React, { Component } from 'react';
import axios from 'axios';

class FriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }
    render() {
        return (
            <form onSubmit={this.submitNewFriend}>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='Enter Name' />
                <input type='number' name='age' value={this.state.age} onChange={this.handleChange} placeholder='Enter Age' />
                <input type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='Enter E-mail' />
                <button onSubmit={this.submitNewFriend}>Save Friend</button>
            </form>
        )
    }
    handleChange = (event) => {
        let {name, value} = event.target;
        if (name === 'age') {
            value = Number(value);
        }
        this.setState({
          [name]: value,
        })
      }
    
    
      submitNewFriend = (event) => {
        event.preventDefault();
      axios
      .post('http://localhost:4000/friends', this.state)
      .then(response =>{
          console.log(response);
      })
      .catch(error => {
          console.log('There was an error', error)
      });

      this.setState({
        name: '',
        age: '',
        email: '',
      })
    }
}

export default FriendForm;