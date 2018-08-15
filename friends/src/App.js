import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        component with list of friends will be displayed here
        <ul>
          <li>Name</li>
          <li>Age</li>
          <li>Email</li>
          <li><Friends /></li>


        </ul>
      </div>
    );
  }
}

export default App;
