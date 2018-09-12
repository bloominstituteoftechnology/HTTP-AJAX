import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import FriendList from './components/FriendList'

class App extends Component {
  constructor(){
    super();
    this.state ={
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    // console.log(this.state.friends);
    // console.log(typeof this.state.friends);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendList list={this.state.friends} />
      </div>
    );
  }
}

export default App;
