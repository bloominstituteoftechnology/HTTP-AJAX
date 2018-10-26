import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Friends from './Friends/Friends';
import FriendForm from './Friends/FriendForm';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  updateFriends = friends => {
    this.setState({ friends });
  };

  render() {
    return (
      <div>
        <Route
          path="/"
          render={props => <Friends {...props} friends={this.state.friends} />}
        />
        <Route
          path="/"
          render={props => (
            <FriendForm {...props} updateFriends={this.updateFriends} />
          )}
        />
      </div>
    );
  }
}
