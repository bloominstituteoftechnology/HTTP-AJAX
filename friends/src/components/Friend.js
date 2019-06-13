import React from "react";

const Friend = props => {
  return (
    <div className="friend-card">
      <div className="friend-icon">
        <i class="fas fa-user fa-xs" />
      </div>
      <div className="friend-details">
        <h3>{props.friends.name}</h3>
        <h4>Age: {props.friends.age}</h4>
        <h4>Email: {props.friends.email}</h4>
      </div>
    </div>
  );
};

export default Friend;
