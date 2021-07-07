import React from 'react';
import Friend from './Friend';
import { NavLink } from 'react-router-dom';

const FriendsList = props => {
  if (props.friends.length === 0) {
    return null;
  }
  console.log(props);

  return (
    <div>
      <h1>Friends:</h1>

      {props.friends.map(friend => (
        <NavLink
          to={`/friends/${friend.id}`}
          style={{ textDecoration: 'none' }}
        >
          <div>
            <h3>Name: {friend.name}</h3>
            <h4>Age: {friend.age}</h4>
            <h5>Email: {friend.email}</h5>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default FriendsList;