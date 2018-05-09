import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor() {
    super();
      this.state = {
        name: '',
        age: '',
        email: '',
        friends: []
      }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then ( list => this.setState({friends: list.data}))
      .catch( error => console.log(error));
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
