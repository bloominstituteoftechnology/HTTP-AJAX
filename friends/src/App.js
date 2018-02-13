import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import Form from './components/EntryBox';

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
