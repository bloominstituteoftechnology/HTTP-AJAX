import React, {Component} from 'react';

const Friend = props => {
  return (
    <div className="friend">
      <h2>Name:{props.allFriendsList.name}</h2>
      <h4>Age:{props.allFriendsList.age}</h4>
      <p>Email:{props.allFriendsListemail}</p>
      <p>Id:{props.allFriendsList.email}
</p>
    </div>
  );
};

export default Friend;

