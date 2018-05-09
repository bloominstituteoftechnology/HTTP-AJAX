import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './FriendsList';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({friends: response.data}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">List of Friends</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FriendsList results={this.state.friends} />
      </div>
    );
  }
}

export default App;