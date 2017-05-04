import React, { Component } from 'react';
import { Friends, AddFriend } from '../containers';
import { Navbar } from './';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AddFriend />
        <Friends />
      </div>
    );
  }
}

export default App;
