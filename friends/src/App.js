import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './Components/FriendsList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.getData();
  };
  
  getData = () => {
    axios
    .get(`http://localhost:5000/friends`)
    .then( response => {
      this.setState( () => ({ friends: response.data }))
    })
    .catch( error => {
      console.error( error );
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* Pass friends array to FriendsList */}
        <FriendsList friends={this.state.friends} />
        </header>
      </div>
    );
  }
}

export default App;
