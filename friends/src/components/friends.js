import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Friend } from './Friend';
import FriendForm from './FriendForm';

const Friends = props =>
  props.friends.map((friend, i) => (
    <Friend key={i} {...friend} deleteFriend={props.deleteFriend} />
  ));

export default Friends;
