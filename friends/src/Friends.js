import React from "react";

const Friends = props => {
  return (
    <React.Fragment>
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
    </React.Fragment>
  );
};

export default Friends;
