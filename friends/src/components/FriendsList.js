import React from "react";

import Friend from "./Friend";

const FriendsList = props => (
  <div className="friends">
    {props.friends.map(friend => (
      <Friend friend={friend} key={friend.id} />
    ))}
  </div>
);

export default FriendsList;
