import React from "react";
import { Link } from "react-router-dom";

import Friend from "../Friend";
import "../../App.css";

const FriendsList = props => {
  // make a list of friends
  const friendsList = props.friends.slice().reverse();

  // return a map of the each friend in friendsList
  return (
    <div className="friends">
      {friendsList.map(friend => {
        return (
          <Link to={`/friends/${friend.id}`}>
            <div className="friend-card">{friend.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default FriendsList;
