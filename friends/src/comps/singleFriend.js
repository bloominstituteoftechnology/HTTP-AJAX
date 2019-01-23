import React from 'react';
import Friend from './friend.js';

const SingleFriend = props => {
  console.log(props.friends);
  console.log(props.match.params.id);
  let friend = props.friends.find(fr => {
    return fr.id === Number(props.match.params.id);
  });
  return (
    <Friend
      {...props}
      name={friend.name}
      age={friend.age}
      email={friend.email}
      key={friend.id}
      id={friend.id}
    />
  );
};

export default SingleFriend;
