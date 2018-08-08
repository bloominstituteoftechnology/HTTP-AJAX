import React from "react";
import FriendCard from "./FriendCard";

const Friend = props => {
  console.log("Friend", props);

  return (
    <div>
      <FriendCard friends={props.friends} />
    </div>
  );
};

export default Friend;
