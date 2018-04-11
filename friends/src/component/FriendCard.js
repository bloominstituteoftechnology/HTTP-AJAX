import React from "react";
import "./FriendCard.css";

const FriendCard = props => {
  return (
    <div className="friend-container">
      <div className="friend-card">
        <div className="friend-name">
          <h3>Name: {props.friends.name}</h3>
        </div>
        <div className="friend-age">
          <h3>Age: {props.friends.age}</h3>
        </div>
        <div className="friend-email">
          <h3>email: {props.friends.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
