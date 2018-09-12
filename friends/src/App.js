import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Display from './components/Display'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends = []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
