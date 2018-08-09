import React, { Component } from 'react';
import {  } from "react-router-dom";

import Friends from './components/Friends'
import './App.css';

const url = 'http://localhost:5000/friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends url={url}/>
      </div>
    );
  }
}

export default App;
