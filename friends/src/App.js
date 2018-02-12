import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friends-list';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <Form />
      </div>
    );
  }
}

export default App;
