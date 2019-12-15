import React, { Component } from 'react';
import './App.css';
import Friends from './component/Friends.js'; 

class App extends Component {
  render() {
    return (
     <div className="App">
      <header className="App-header">
        <h1>My friends</h1>
      </header>
     <Friends />
      </div>
    );
  }
}

export default App;
