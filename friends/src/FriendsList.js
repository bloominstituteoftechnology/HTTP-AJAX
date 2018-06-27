import React from "react";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div key={friend.id} age={friend.age} email={friend.email}>
            {friend.name} 
            age:{friend.age} 
            email:{friend.email}
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
