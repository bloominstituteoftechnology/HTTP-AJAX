import React from "react";

function Friendslist(props) {
  return (
    <div>
      {props.friends.map(friend => (
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <p>email: {friend.email}</p>
          <p>age: {friend.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Friendslist;
