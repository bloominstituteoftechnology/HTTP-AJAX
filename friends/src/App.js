import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Friends';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log('ERROR:', err));
  }

  render() {
    return <Friends friends={this.state.friends} />;
  }
}

export default App;
