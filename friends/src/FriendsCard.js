import React from "react";
import { NavLink } from "react-router-dom";

const FriendsCard = props => {
    console.log(props);
  return (
    <NavLink to={`/friends/${props.friend}`} className="FriendsCard">
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
    </NavLink>
  );
};

export default FriendsCard;
