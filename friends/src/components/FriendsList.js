import React from "react";
import "./Friends.css";

const FriendsList = props => {
  return (
    <React.Fragment>
      <div className="friends-container">
        <h1>My Friends</h1>
        {props.friendsList.map((friend, index) => (
          <ul key={index}>
            <span onClick={() => props.deleteFriend(friend.id)}>&#10006;</span>
            <li> name: {friend.name}</li>
            <li> age: {friend.age}</li>
            <li> email: {friend.email}</li>
          </ul>
        ))}
      </div>
    </React.Fragment>
  );
};

export default FriendsList;
