import React from "react";

import Friend from "./Friend";

function FriendsList(props) {
  return props.friends.map(friend => <Friend friend={friend} />);
}

export default FriendsList;
