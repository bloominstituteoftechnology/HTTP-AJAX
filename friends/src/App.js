import React, { Component } from 'react';
import './App.css';
import Friend from './Friend';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
  }
  
  render() {
    return (
      <div className="App">
        <div>
          {this.state.friends.map(friend => {
            return <Friend 
              friend={friend}
            />
          })}
        </div>
        <form onSubmit={this.addFriend}>
          <input type='text' id='name' placeholder='Name' />
          <input type='text' id='age' placeholder='Age' />
          <input type='text' id='email' placeholder='Email' />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }

  addFriend() {
    axios
      .post('http://localhost:5000/friends', {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log('error', error);
      });
  }
}

export default App;
