import React from 'react';

export default function Friends(props) {
  const friendElems = props.friendList.map(friend => <div key={friend.id}>{friend.name}</div>);
  if (friendElems) return <div>{friendElems}</div>;
  return null;
}
