import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FriendList from './components/FriendList';

export default class APP extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={FriendList} />
      </div>
    );
  }
}