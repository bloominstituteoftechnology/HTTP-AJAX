import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './FriendsList';
import Friend from './Friend';
import axios from "axios";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      friends: []
    }
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
        <Friend />
        <FriendList friendProp={this.state}/>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(respone => {
        this.setState({ friends: respone.data });
      })
      .catch(error => {
        console.log(`There was an error getting friends: ${error}`);
      });
  }

}

export default App;
