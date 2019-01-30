import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import './App.css';
import FriendsList from './FrindsList';
//import DisplayFriends from './components/DisplayFriends';

class App extends Component {
  constructor(){
    super()

    this.state = {
      friends: []
    }

  }

  componentDidMount() {
    axios
    .get ("http://localhost:5000/friends")
    .then ( rezultz => {
      console.log(rezultz)
      this.setState (
        { friends: rezultz.data }
      )
    })
    .catch (errerz => {
      console.log(errerz)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ALL THE FRIENDS!</h1>
          
          <FriendsList friends={this.state.friends} />
          
        </header>
      </div>
    );
  }
}

export default App;
