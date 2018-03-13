import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';



class App extends Component {
  FriendsList = () => {
      return <FriendsList />;
    }

  render() {
    return (
      <div className="App">
        <FriendsList />;
      </div>
    );
  }
}

export default App;