import React, { Fragment } from 'react';


function FriendsList(props) {
return (
  <Fragment>
  {props.friends.map(friend =>
    <div className="friend">
    <h1>{friend.name}</h1>
    <p> Age: {friend.age}</p>
    <p> Email: {friend.email}</p>
    </div>
  )}
  </Fragment>
);

}
export default FriendsList;
