import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FriendList from './components/FriendList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        savedList: [],
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FriendList} />
      </div>
    );
  };
};
