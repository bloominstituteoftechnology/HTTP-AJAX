import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import FriendTable from './FriendTable.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friendsData : []
    }
  }
  componentWillMount(){
    axios
      .get('http://localhost:5000/friends')
        .then(friends =>{
          this.setState({friendsData : friends.data})
      })
      // .catch(error =>{
      //   console.log(error);
      // })
  }
  render() {
    return (
      <div className="App">
       <FriendTable friends = {this.state.friendsData}/>
      </div>
    );
  }
}

export default App;
