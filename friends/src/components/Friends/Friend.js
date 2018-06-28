import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
  return(
    <li key={`${props.friend.id}-${Math.random()}`}>
      <div className="friend__name">{props.friend.name}</div>
      <div className="friend__age">{props.friend.age}</div>
      <div className="friend__email">{props.friend.email}</div>
      <Link to={`/update/${props.friend.id}`}>
        <button>Update</button>
      </Link>
      <button onClick={() => {props.onDeleteFriend(props.friend.id)}}>Delete</button>
    </li>
  );
}

export default Friend;
