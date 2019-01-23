import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    error: ''
  }

  componentDidMount() {
    axios.get(http://localhost:5000/friends)
    .then(res => {
      this.setState({
        friends: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
