import React, { Component } from 'react';
import FriendsView from './FriendsView.js';
import './App.css';

const axios = require("axios");


class App extends Component {

  constructor(params) {
    super(params);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then((result) => this.setState({data: result.data}));
  }

  render() {
    return (
      <div className="App">
        <FriendsView data={this.state.data} />
      </div>
    );
  }
}

export default App;
