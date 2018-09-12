import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
  return (
    <div>
      {props.friends && props.friends.map(friend => <Friend friend={friend} deleteFriend={props.deleteFriend}/>)}
    </div>
  );
};

export default FriendsList;
