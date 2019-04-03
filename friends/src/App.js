import React, { Component } from 'react';
import './App.css';
import Data from './data'
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={
        friends: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
          this.setState({ friends: res.data });
      })
      .catch(err => {
          console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Data friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
