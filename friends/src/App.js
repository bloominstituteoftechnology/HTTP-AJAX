import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import FriendsList from './FriendsList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
      .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendsList results={this.state.friends} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>                 
      </div>
    );
  }
}

export default App;