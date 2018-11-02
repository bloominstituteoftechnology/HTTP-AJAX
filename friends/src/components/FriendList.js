import React from "react";


const FriendsList = props => {

  return (
    <div>
      <h1>{props.friends.name}</h1>
      <h2>{props.friends.age}</h2>
      <h3>{props.friends.email}</h3>
      <button>delete</button>

    </div>
  );
};

export default FriendsList;
