import React from "react";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(personOb => (
        <div key={personOb.id}>
          <h2>{personOb.name}</h2>
          <h3>Age: {personOb.age}</h3>
          <h4>Email: {personOb.email}</h4>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
