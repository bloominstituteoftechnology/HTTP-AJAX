import React, { Component } from 'react';
import './App.css';
import AddFriendForm from './components/AddFriendForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriendForm />
      </div>
    );
  }
}

export default App;
