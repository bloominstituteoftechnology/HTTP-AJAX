import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from "./components/FriendForm";



class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [{
        id: '',
        name: '',
        age: '',
        email: ''
      }],
        name: '',
        age: '',
        email: ''
    };

  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({friends: response.data});

      })
      .catch(error => console.log('ERROR: ', error));
  }




  render() {
    return (
      <div className="App">

        <h1> dats my Friend List</h1>


        <div className = 'friendlist-container'>
        {this.state.friends.map( friend => (
          <FriendList key = {friend.email} friend = {friend}  />

          )
        )}
        </div>


        <div className = 'friendform-container'>
          <FriendForm
            addNewFriend = {this.addNewFriend}
            input_name = {this.state.name}
            input_age = {this.state.age}
            input_email = {this.state.email}
            handleInput = {this.handleInput}
          />

        </div>

      </div>   // end App
    );
  }
}

export default App;
