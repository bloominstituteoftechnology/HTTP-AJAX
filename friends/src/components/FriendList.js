import React from "react";


const FriendsList = props => {

  return (
    <div>
      <h1>{props.friends.name}<button>delete</button></h1>

    </div>
  );
};

export default FriendsList;
