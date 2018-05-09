import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsWrapper from './components/FriendsWrapper';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      friends: []
  }

  this.componentDidMount () {

  }

  render() {
    return (
      <div className="App">
        <FriendsWrapper />
      </div>
    );
  }
}

export default App;
