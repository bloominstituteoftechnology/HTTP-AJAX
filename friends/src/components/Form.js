import React, { Component } from 'react';
import axios from 'axios';

/* Here we used a class component because component will need to have its own state. State is required here for the event handlers*/

class Form extends Component {

    constructor() { 
      super();
      this.state = {
        name: '',
        age: '',
        email: '',
        id: 0
      }
    }

handlenewFriendChange = (e) => {
    this.setState({ [e.target.id]: e.target.value }); /*updating current state. [] abstracts. It says take the value in id and set it to what the value in 'value' now is */
};

handleSubmitNewFriend = () => {
    axios
        .post(`http://localhost:5000/friends`, this.state) /* passing in current state (that had been updated by handlenewFriendChange) to post to server*/
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    this.setState({id: '', name: '', age: '', email: '' }); /*resetting state to empty strings*/
    window.location.reload(); /*location object contains information about the current URL. Reload method reloads the current document here to show updated friend.*/
};

handleDeleteFriend = () => {
    axios
        .delete(`http://localhost:5000/friends/${this.state.id}`) /* ${this.state.id} dynamically set, to look for any inputed property of new friend*/
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })

    this.setState({id: '', name: '', age: '', email: '' });
    window.location.reload();
};

  render() {
        
    return (
      <div>
        <input className='nameInput'
            id="name"
            value={this.state.name}
            onChange={this.handlenewFriendChange}
            placeholder='Name'
        />
        <input className='ageInput'
            id='age'
            value={this.state.age}
            onChange={this.handlenewFriendChange}
            placeholder='Age'
        />
        <input className='emailInput'
            id='email'
            value={this.state.email}
            onChange={this.handlenewFriendChange}
            placeholder='Email'
        />
        <button onClick={this.handleSubmitNewFriend}>Submit Friend</button>
        <button onClick={this.handleDeleteFriend}>Delete Friend</button> 
      </div>
    );
  }
}

export default Form;