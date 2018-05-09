import React, { Component } from 'react';
import axios from 'axios';
import Friends from './Friends.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error(err);
      });
      
  }
  render() {
    return (
      <div className="App">
        {/* <ul>{friends=this.state.friends}</ul> */}
        <Friends />
      </div>
    );
  }
}

export default App;