import React from "react";
const Friend = props => {
  return (
    <React.Fragment>
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
      <button onClick={() => props.editHandle(props.friend.id)}>
        Edit info
      </button>
      <button onClick={() => props.deleteHandle(props.friend.id)}>
        Not a true friend anymore?
      </button>
    </React.Fragment>
  );
};

export default Friend;
