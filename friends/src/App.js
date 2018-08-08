import React, { Component } from 'react';
import './App.css';
import { } from 'react-router-dom';
import Friends from './components/Friends';

const url = 'http://localhost:5000/friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends url={url} />
      </div>
    );
  }
}

export default App;
