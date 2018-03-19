import React, { Component } from 'react';
import './App.css';
import Friends from './Friends.js';

class App extends Component {
  render() {
    return (
      <div className="App">
  <header className="App-header">
    <h1>I Have No Friends.</h1>
  </header>
      <Friends />
     </div>
  );
}
}

export default App;
