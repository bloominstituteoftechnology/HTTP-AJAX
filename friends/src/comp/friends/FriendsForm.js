import React, { Component } from 'react';
import axios from 'axios';

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
      <div>
        <form>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={ this.state.inputVal }
            onChange={ this.setInputVal }
          />

          <input
            type='text'
            name='age'
            placeholder='age'
            value={ this.state.inputVal }
            onChange={ this.setInputVal }
          />

          <input
            type='text'
            name='email'
            placeholder='email'
            value={ this.state.inputVal }
            onChange={ this.setInputVal }
          />
          
          {/* add new friend */}
          <input
            type='submit'
            name='add'
            value='Add Friend'
            onClick={ this.addNewFriend }
          />

          {/* update existing friend */}
          <input
            type='submit'
            name='update'
            value='Update Friend'
            onClick={ this.addNewFriend }
          />

          {/* delete existing friend */}
          <input
            type='submit'
            name='delete'
            value='Delete Friend'
            onClick={ this.addNewFriend }
          />
        </form>
      </div>
    )
  }
}