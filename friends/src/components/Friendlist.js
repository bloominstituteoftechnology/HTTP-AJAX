import React from "react";

function Friendlist(props) {
  console.log("rendering form");
  return (
    <ul>
      {props.friendlist.map(friend => (
        <li key={friend.name}>
          {friend.name}
          {friend.age}
        </li>
      ))}
    </ul>
  );
}

export default Friendlist;
