import React, { Component } from 'react';
import FriendsList from './Components/FriendsList'; 

import './App.css';

class App extends Component {
  constructor(){
    super(); 
    this.state = {
      friendsData: [], 
      loading: true
    }
  }
  
  render() {
    return (
      <div className="App">
        <FriendsList friends = {this.state.friends} />
      </div>
    );
  }
}

export default App;
