import React, { Component } from 'react';
import FriendList from './components/FriendList';
import Form from './components/Form';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <FriendList />
        <Form />
      </div>
    );
  }
}

export default App;
