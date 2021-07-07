import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';

class App extends Component {
  
  render() {
    return (
      <div>
        <h1 className="friendsH1">My Friends</h1>
        <Friends />
      </div>
    );
  }
}

export default App;
