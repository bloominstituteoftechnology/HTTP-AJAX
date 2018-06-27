import React from "react";
import Friends from "./Friends";
import AddFriendForm from "./AddFriendForm";

const FriendsList = props => {
  return (
    <div>
      [FRIENDS LIST]
      <Friends data={props.data} />
      <AddFriendForm />
    </div>
  );
};

export default FriendsList;
