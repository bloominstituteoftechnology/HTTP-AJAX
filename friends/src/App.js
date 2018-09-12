import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FriendList from './Components/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    
  };

  render() {
    return (
      <div className="App">
        <FriendList/>
      </div>
    );
  }
}

export default App;
