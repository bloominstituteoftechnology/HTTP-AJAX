import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
  const { friends } = props;

  return (
    <div>
      <h2>Friends List</h2>
      {friends.map(friend => (
        <div key={friend.id}>
          <Friend
            friend={friend}
            handleSetData={props.handleSetData}
            handleDeleteFriend={props.handleDeleteFriend}
          />
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
