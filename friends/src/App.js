import React, { Component } from 'react';
import axios from 'axios';

import Friends from './components/Friends'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      friends: []
    };
  }


  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(error => {
        console.error('We have an error', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends List</h1>
        </header>
        <Friends friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
