import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendsList'

import axios from 'axios'


class App extends Component {
  constructor() {
    super();
    this.state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  
   }
  }

  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <FriendList />
        
        </header>
      </div>
    );
  }
}

export default App;
