import React, { Component } from 'react';
import axios from 'axios';
import './FriendForm.css';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  updateFriend = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
  
  addFriend = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state)
      .then(response => this.props.refresh())

    this.setState({
      name: '',
      age: '',
      email: '',
   })
  }

  render = () => {
    return (
      <div className='friend__form'>
      <form type='submit' onSubmit={this.addFriend}>
        <div className='form__text'>Add a new Friend!</div>
        <input 
          type='text'
          className='form__input' 
          value={this.state.name}
          placeholder='Name'
          onChange={this.updateFriend}
          name='name'
        />
        <input 
          type='number'
          className='form__input' 
          value={this.state.age}
          placeholder='Age'
          onChange={this.updateFriend}
          name='age'
        />
        <input
          type='email'
          className='form__input' 
          value={this.state.email}
          placeholder='Email'
          onChange={this.updateFriend}
          name='email'
        />
        <input type='submit' value='submit' className='form__button' />
      </form>
    </div>
    )
    
  }
}

export default FriendForm;