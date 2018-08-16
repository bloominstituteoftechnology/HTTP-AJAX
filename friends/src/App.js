import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import List from './Components/List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    const url = 'http://localhost:5000/friends';

    axios 
    .get(url)
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(error => {
      console.log('Error');
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
