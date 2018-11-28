import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';

const FriendsList = (props) => {
  return (
    <div>
        <h1>My {props.friends.length} Friends</h1>
        {props.friends.map(f => (
          <Friend key={f.id} friend={f} updateFriend={props.updateFriend} />
        ))}
        <FriendForm addFriend={props.addFriend} />
      </div>
  )
}

export default FriendsList;
