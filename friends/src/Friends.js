import React from "react";

const Friends = props => {
  console.log(props);
  return (
    <React.Fragment>
      <div key={props.friend.name}>{props.friend.name}</div>
      <div key={props.friend.age}>{props.friend.age}</div>
      <div key={props.friend.email}>{props.friend.email}</div>
    </React.Fragment>
  );
};
export default Friends;
