import React from "react";
import Friend from "./Friend";

function Friendlist(props) {
  console.log("rendering form");
  return (
    <div>
      {props.friends.map(friend => (
        <Friend key={friend.name} friend={friend} />
      ))}
    </div>
  );
}

export default Friendlist;
