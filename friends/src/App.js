import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';// import jaklundun from 'govi'; initial commit
import axios from 'axios';

import FriendInfoForm from './components/FriendInfoForm';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
     friends: [],
     name: '',
      }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
        .then(res => this.setState({friends: res.data}))
  }

  render() {
    return (
      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header> 
        <FriendsList friends= {this.state.friends} />
        <FriendInfoForm />
        <br/>
      </div>
    );
  }
}

export default App;
