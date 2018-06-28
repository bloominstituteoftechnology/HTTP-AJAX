import React, { Component } from 'react';
import Friend from "./Friend";
import {Link} from "react-router-dom";


export default class FriendsList extends Component {
  constructor(props) {
  super(props);
  this.state = {
    cats: []
  };
}
  render() {
  return (
    <div>
      <h1>My Friends</h1>
      {this.props.friends.map(friend => {
        return (
          <Friend className ='friend'
            key={friend.id}
            friend={friend}
          />
        );
      })}
    </div>
  );
}
}
