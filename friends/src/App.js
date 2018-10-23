import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Friends from './components/Friends';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        friends: [],
    }
}

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({ friends : response.data })
        })
        .catch(err => {
            console.log(err)
        })
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <h1>Axios Friends</h1>

        <Route exact path="/friends" render={ props => (
          <Friends {...props} friends={this.state.friends} />
        )} />
        <Route path="/friends/:id" render={ props => (
          <Friend {...props} friends={this.state.friends} />
        )} />
        <Route path="/add" render={ props => (
          <FriendForm friends={this.state.friends} />
        )} />
      </div>
    );
  }
}

export default App;
