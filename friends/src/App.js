import React, { Component } from 'react';
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
    axios.get("http://localhost:5000/friends").then((result) => this.setState({data: result.data}));
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
