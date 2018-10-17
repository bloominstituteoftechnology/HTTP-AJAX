import React from "react";

import Friend from "./Friend";

const FriendsList = props => (
  <div className="friends">
    {props.friends.map(friend => (
      <Friend
        friend={friend}
        key={friend.id}
        deleteFriend={props.deleteFriend}
      />
    ))}
  </div>
);

export default FriendsList;
