import React from "react";
import PropTypes from "prop-types";
import "./FriendCard.css";

const FriendCard = props => {
  return (
    <div className="friend-card">
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email} </p>
    </div>
  );
};
export default FriendCard;
