import React, { Component } from 'react';
import './App.css';
import FriendDetails from './FriendDetails';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome my Friends!</h1>
        <Form />
        <FriendDetails />
      </div>
    );
  }
}

export default App;
