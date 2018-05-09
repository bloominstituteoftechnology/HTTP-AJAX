import React, { Component } from 'react';
import FriendsForm from './FriendsForm';

export default class FriendsWrapper extends Component {
  render() {
    return (
      <div className="friendsList">
        <p>List of Friends will populate here</p>
        <FriendsForm />
      </div>
    );
  }
}

