import React, { Component } from 'react';
import axios from 'axios';


class NewFriend extends Component {

    constructor() {
      super();
      this.state = {
        friends: [],
        name: '',
        age: '',
        email: '',
      }
    }
  
    ChangeName = event => {
      this.setState ({ name: event.target.value });
    };
  
    ChangeAge = event => {
      this.setState ({ age: event.target.value });
    };
  
    ChangeEmail = event => {
      this.setState ({ email: event.target.value });
    };
  
    handleSubmit = event => {
      axios.post('http://localhost:5000/friends', { 
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
       })
      .then(response => {
        console.log(response.data);
      })  
    };
  
    render() {
      return (
            <div>
                <ul className="friend-grid">
                    <li key="listKey" className="friend">
                    <form onSubmit={this.handleSubmit}>
                        <div className="friend-name">Name: 
                        <input name='name' type='text' onChange={this.ChangeName} placeholder='Name' />
                        </div>
                        <div className="friend-age">Age: 
                        <input name='age' type='text' onChange={this.ChangeAge} placeholder='Age' />
                        </div>
                        <div className="friend-email">Email: 
                        <input name='email' type='text' onChange={this.ChangeEmail} placeholder='Email' />
                        </div>
                        <button type='submit'>Save</button>
                    </form>
                    </li>
                </ul>
            </div>
        );
    }
}
  
export default NewFriend;