import React from "react";
import Friend from "./Friend";
const FriendsList = props => {
  return <Friend friend={props.friend} deleteHandle={props.deleteHandle} />;
};

export default FriendsList;
