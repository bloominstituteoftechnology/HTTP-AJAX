import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function FriendsList(props) {
return (
  <Fragment>
  {props.friends.map(friend =>
    <Link to={`/friends/${friend.id}`}>
    <div className="friend">
    <h1>{friend.name}</h1>
    <p> Age: {friend.age}</p>
    <p> Email: {friend.email}</p>
    </div>
    </Link>
  )}
  </Fragment>
);

}
export default FriendsList;
