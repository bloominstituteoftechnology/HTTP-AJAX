import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
        
    
  
  render() {
    return (
      <div className="App">
      <FriendsList />
      <FriendForm />
    
      </div>
    );
  }
}


export default App;
