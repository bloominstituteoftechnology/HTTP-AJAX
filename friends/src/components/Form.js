import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        age: '',
        email: ''
      }
    }

    handlenewFriendNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlenewFriendAgeChange = (event) => {
        this.setState({ age: event.target.value });
    };

    handlenewFriendEmailChange = (event) => {
        this.setState({ email: event.target.value });
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
    return (
      <div>
        <input className='nameInput'
            value={this.state.name}
            onChange={this.handlenewFriendNameChange}
            placeholder='Add Name...'
        />
        <input className='ageInput'
            name='age'
            value={this.state.age}
            onChange={this.handlenewFriendAgeChange}
            placeholder='Add Age...'
        />
        <input className='emailInput'
            name='email'
            value={this.state.email}
            onChange={this.handlenewFriendEmailChange}
            placeholder='Add Email...'
        />
        <button onClick={this.handleSubmitNewFriend}>Submit New Friend</button>        
      </div>
    );
  }
}

export default Form;

// {if (nameInput.length > 0 && ageInput.length > 0 && emailInput.length > 0) {
//     return (
//         <button onClick={this.handleSubmitNewFriend}>Submit New Friend</button>
//     )
// } }