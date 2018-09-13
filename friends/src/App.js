import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendList';

class App extends Component {
  
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <FriendList/>
      </div>
    );
  }

}

export default App;
