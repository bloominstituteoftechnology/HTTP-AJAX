import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";

import Friends from './Components/Friends'
import FriendForm from './Components/FriendForm'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log(response)
      this.setState({ friends: response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="nav-links">
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div className="wrapper">
          <div className="content-wrapper">
            <Friends friends={this.state.friends} />
          </div>  
          <div className="form-wrapper">
            <FriendForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
