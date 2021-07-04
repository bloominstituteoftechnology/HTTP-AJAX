import React, { Component } from 'react';
import axios from 'axios';

import './friends-form.css';

export default class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      age: '',
      email: '',
      friend: [],
    }
  }

  setInputVal = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewFriend = e => {
    e.preventDefault();
    
    // add new friend
    if (e.target.name === 'add') {
      axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age:  this.state.age,
        email:  this.state.email
      })
    }
    // update friends information
    else if (e.target.name === 'update') {
      axios.get('http://localhost:5000/friends')
        .then(({ data }) => {
          for (let i = 0; i < data.length; i++) {
            if (this.state.name.toLocaleLowerCase() === data[i].name.toLocaleLowerCase()) {
              let { id } = data[i];

              axios.put(`http://localhost:5000/friends/${ id }`, {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
              })
            }
          }
        })
        .catch(err => console.log(err));
    }
    // delete friend
    else if (e.target.name === 'delete') {
      axios.get('http://localhost:5000/friends')
        .then(({ data }) => {
          for (let i = 0; i < data.length; i++) {
            if (this.state.name.toLocaleLowerCase() === data[i].name.toLocaleLowerCase()) {
              let { id } = data[i];
              axios.delete(`http://localhost:5000/friends/${id}`)
                .then(a => console.log('DELETE SUCCESS', a))
                .catch(err => console.log(err))
            }
          }
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div className='friends-form-container'>
        <div className='friends-form-container__form-wrapper'>
          <form className='form-wrapper__form'>
            <input
              className='form__input'
              name='name'
              onChange={ this.setInputVal }
              placeholder='name'
              type='text'
              value={ this.state.inputVal }
            />

            <input
              className='form__input'
              name='age'
              onChange={ this.setInputVal }
              placeholder='age'
              type='text'
              value={ this.state.inputVal }
            />

            <input
              className='form__input'
              name='email'
              placeholder='email'
              onChange={ this.setInputVal }
              type='text'
              value={ this.state.inputVal }
            />
            
            {/* add new friend */}
            <input
              className='form__input-button add'
              name='add'
              onClick={ this.addNewFriend }
              type='submit'
              value='Add Friend'
            />

            {/* update existing friend */}
            <input
              className='form__input-button update'
              name='update'
              onClick={ this.addNewFriend }
              type='submit'
              value='Update Friend'
            />

            {/* delete existing friend */}
            <input
              className='form__input-button delete'
              name='delete'
              onClick={ this.addNewFriend }
              type='submit'
              value='Delete Friend'
            />
          </form>
        </div>
      </div>
    )
  }
}