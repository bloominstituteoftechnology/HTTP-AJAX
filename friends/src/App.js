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
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      {this.state.friends.map(friend => <div className={"friend"}key={friend.id} friend={friend} >
        {/* Friend's Info Here */}
        {friend.name}
        {friend.age}
        {friend.email}
      </div>)}
      </div>
    );
  }
}

export default App;
