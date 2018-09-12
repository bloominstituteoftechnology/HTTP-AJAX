import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
      super();
      this.state={
          friends: []
      };
    }

    componentDidMount() {
        axios
          .get(`http://localhost:5000/friends`)
          .then (response => {
            // console.log(response.data);
            this.setState({ friends: response.data })
          });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my HTTP-AJAX Project</h1>
        </header>
        
      {this.state.friends.map(friend => <div className={"friend"}key={friend.id} friend={friend} >
        {/* Friend's Info Here */}
        <p>Name: {friend.name}</p>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
      </div>)}
      </div>
    );
  }
}

export default App;
