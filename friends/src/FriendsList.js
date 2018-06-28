import React from "react";
import { Link } from 'react-router-dom';
import Friend from "./Friend";


const FriendsList = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => (
        // <Link className="friend" key={`save-${Math.random()}`} to={`/friends/${friend.id}`}>
          <Friend handleSetData={props.handleSetData} key={friend.id} friend={friend} />
         
          //  </Link>
      ))}
    </div>

  );
};

export default FriendsList;
