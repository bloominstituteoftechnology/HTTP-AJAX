import React, { Component } from 'react';import React from 'react';
import axios from 'axios';

import Friend from './Friend';

export default class List extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';
    axios.get(endpoint).then(response => {
      this.setState({ friends: response.data });
    });
  }

  render() {
    const getFriendList = () => {
      return this.state.friends.map((friend, i) => {
        return <Friend key={friend.name} index={i} friend={friend} />;
      });
    };

    return (
      <div className="list">
        <h1>Friends List will be here</h1>
        <div>
          <ul className="friend-list">{getFriendList()}</ul>
        </div>
      </div>
    );
  }
}