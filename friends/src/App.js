import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import Form from './components/EntryBox';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <Form SubmitForm={this.SubmitForm}/> // same regardless if this is a class or function 
      </div>
    );
  }
  SubmitForm() {
    axios.post('http://localhost:5000/friends', {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
      })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}


export default App;
