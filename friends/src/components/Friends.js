import React from 'react';

export default function Friends(props) {
  const friendElems = props.friendList.map((friend) => {
    const string = `${friend.name}, age: ${friend.age}, email: ${friend.email}`;
    return <div key={friend.id}> {string}</div>;
  });

  return <div>{friendElems}</div>;
}
