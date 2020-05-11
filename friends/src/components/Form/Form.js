import React, { Component } from 'react';
import axios from 'axios';
import './FormStyle.css';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        email: '',
        idee: ''
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
        window.location.reload();
    };

    handleDeleteFriend = () => {
        axios
            .delete(`http://localhost:5000/friends/${this.state.idee}`)
                .then(response => {console.log(response.status)})
                .catch(err => {console.log(err)})

        this.setState({ id: '' });
        window.location.reload();
    }

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
        <div>
            <input className='delete'
            id='idee'
            value={this.state.idee}
            onChange={this.handlenewFriendChange}
            placeholder='ID of friend to delete'/>
            <button onClick={this.handleDeleteFriend}>Delete Friend</button>
        </div>
      </div>
    );
  }
}

export default Form;