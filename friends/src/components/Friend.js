import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <h3>Name: {props.friends.name}</h3>
      <h4>Age: {props.friends.age}</h4>
      <h4>Email: {props.friends.email}</h4>
    </div>
  );
};

export default Friend;
