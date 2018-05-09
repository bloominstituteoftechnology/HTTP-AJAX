import React, { Component } from 'react';
import logo from './logo.svg';
import FriendsView from './FriendsView.js';
import './App.css';
const axios = require("axios");


class App extends Component {

  constructor(params) {
    super(params);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <FriendsView />
      </div>
    );
  }
}

export default App;
