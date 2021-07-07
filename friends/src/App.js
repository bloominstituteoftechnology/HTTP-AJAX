import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

let url = 'htt[://localhost:5000/friends'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      loading: true,
      friendName: '',
      friendAge: '',
      friendEmail: '',
      number: undefined
    }
  }

  componentDidMount() {
    axios.get(url).then(response => this.setState({friends: response.data, loading: false, number: response.data.length}));
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
