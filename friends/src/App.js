import React, { Component } from 'react';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';
import './App.css';

import axios from 'axios';
//const axios = require('axios');

class App extends Component {

      constructor(props){
        super(props);
        this.state = {
          friends: [],
          newFriend: ''
        }
      }

      componentDidMount() {
        
        console.log(axios
          .get('http://localhost:5000/friends'));


            }
      



  render() {
    return (
      <React.Fragment>
          <FriendsList />
          <FriendForm friends={this.state.friends} />
      </React.Fragment>
    );
  }
}

export default App;
