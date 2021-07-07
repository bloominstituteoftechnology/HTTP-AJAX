import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import FriendForm from './components/FriendForm';



class App extends Component {
  render() {
    return (
      <div className="App">
      <FriendForm />
      </div>
    );
  }
}


export default App;
