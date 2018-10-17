import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friend: {
        id: null,
        name: '',
        age: null,
        email: '',
      },
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <Route exact path='/friend' component={FriendList} />
        <Route path='/' component={FriendForm} />
      </div>
    );
  }
}

export default App;