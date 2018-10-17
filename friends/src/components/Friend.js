import React from "react";

const Friend = props => (
  <div className="friend">
    <h2>{props.friend.name}</h2>
    <p>{props.friend.age}</p>
    <p>{props.friend.email}</p>
  </div>
);

export default Friend;
