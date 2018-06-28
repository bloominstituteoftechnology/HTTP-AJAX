import React from 'react';
import Friend from './Friend';

export default function Friends(props) {
  const friendElems = props.friendList.map(friend => <Friend key={friend.id} {...friend} handleFriendUpdate={props.handleFriendUpdate} />);
  return <div>{friendElems}</div>;
}