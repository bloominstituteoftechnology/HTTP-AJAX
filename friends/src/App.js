import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import Friend from '../src/components/Friend'

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    };
  }
  

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch (err => { console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
         <h1>Hello Friends!</h1>
         <Friend friends={this.state.friends} />
         
      </div>
    );
  }
}

export default App;
