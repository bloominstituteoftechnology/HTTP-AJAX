import React from "react";
import Friends from "./Friends";

const FriendsList = props => {
  return (
    <div>
      [FRIENDS LIST]
      <Friends data={props.data} />
    </div>
  );
};

export default FriendsList;
