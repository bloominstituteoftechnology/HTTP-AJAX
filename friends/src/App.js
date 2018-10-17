import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Home from './Components/Home';
import FriendsList from './Components/FriendsList';
import FriendForm from './Components/FriendForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
        console.log(response);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/my-friends" component={FriendsList} />
        <Route path="/friend-form" component={FriendForm} />
      </div>
    );
  }
}

export default App;
