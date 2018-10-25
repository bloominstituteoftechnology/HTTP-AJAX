import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FriendList from './components/FriendList';
import Friend from './components/Friend';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={FriendList} />
        <Route path="/friends/:id" render={(props) => 
        <Friend {...props} />}
        />
      </div>
    );
  }
}