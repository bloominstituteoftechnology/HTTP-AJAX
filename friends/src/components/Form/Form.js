import React, { Component } from 'react';
import axios from 'axios';
import './FormStyle.css';

class Form extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        age: '',
        email: ''
      }
    }

    handlenewFriendChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleSubmitNewFriend = () => {
        axios
            .post(`http://localhost:5000/friends`, this.state)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                })

        this.setState({ name: '', age: '', email: '' });
    };

  render() {
    let flag = false;
    if (this.state.name !== '' && this.state.age !== '' && this.state.email !== '') {
        flag = true;
    }
        
    return (
      <div className='form'>
        <div className='inputs'>
            <input className='nameInput'
                id="name"
                value={this.state.name}
                onChange={this.handlenewFriendChange}
                placeholder='Add Name...'
            />
            <input className='ageInput'
                id='age'
                value={this.state.age}
                onChange={this.handlenewFriendChange}
                placeholder='Add Age...'
            />
            <input className='emailInput'
                id='email'
                value={this.state.email}
                onChange={this.handlenewFriendChange}
                placeholder='Add Email...'
            />
        </div>
        { flag ? <button className='submitbutton' onClick={this.handleSubmitNewFriend}>Submit New Friend</button> : <button className='notdonebutton'>Finish Filling Out Form</button>}
      </div>
    );
  }
}

export default Form;