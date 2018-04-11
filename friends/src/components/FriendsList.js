import React, { Component } from 'react';
import Friend from './Friend';

const FriendsList = props => {
  return (
    props.friends.map(friend => <Friend friend={friend} />)
  ); 
}

export default FriendsList;
