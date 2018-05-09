import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
        
    
  
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={FriendsList} />
    
      </div>
    );
  }
}


export default App;
