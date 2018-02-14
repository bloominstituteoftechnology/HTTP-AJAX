import React, { Component } from 'react';
import './App.css';
import Friend from './Friend';
import axios from 'axios';
import Form from './Form';

class App extends Component {
  state = {
    friends: [],
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <Friend 
            friend={this.state.friends}
            deleteFriend={this.deleteFriend}
          />
        </div>
        <Form onCreate={this.loadFriends}/>
        {/* <Form addFriend={this.addNewFriend} /> */}
      </div>
    );
  }

  // post, now in Form.js
  // addNewFriend() {
  //   axios
  //     .post('http://localhost:5000/friends', {
  //       name: document.getElementById('name').value,
  //       age: document.getElementById('age').value,
  //       email: document.getElementById('email').value,
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //     })
  // }

  deleteFriend = (id) => {
    const endpoint = `http://localhost:5000/friends/${id}`
    axios
      .delete(endpoint)
      .then(response => {
        console.log('response from', response);
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log('error deleting', error);
      })
  }

  componentDidMount() {
    this.loadFriends();
  }

  // reloads the data
  loadFriends = () => {
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
