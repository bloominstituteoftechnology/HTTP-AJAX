import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css';

const FriendDisplay = props => {
  return(
    <div className="friend-display">
      <Link to={`/update/${props.id}`}>{props.name} : {props.email}</Link>
    </div>
  );
}

export default FriendDisplay;
