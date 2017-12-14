import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

// import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
        {/* <List />  */}
      </div>
    );
  }
}

export default App;
