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
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(err => {
        console.error("error:", err);
      });
      
  }
  render() {
    console.log("friends:", this.state.friends);
    return (
      <div className="App">
        <Friends friendData={this.state.friends}/>
      </div>
    );
  }
}

export default App;