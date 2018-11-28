import React from "react";

const Friends = props => {
  console.log(props);
  return (
    <React.Fragment>
      <div key={props.friend.id}>{props.friend.name}</div>
      <div key={props.friend.id}>{props.friend.age}</div>
      <div key={props.friend.id}>{props.friend.email}</div>
    </React.Fragment>
  );
};

export default Friends;
