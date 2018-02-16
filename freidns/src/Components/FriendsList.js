import React from "react";
import "../styles/FriendsList.css";

const FriendsList = props => {
  return (
    <div className="FriendsList-main-container">
      <ul>
        {props.friends.map(elements => {
          return (
            <div className="FriendsList-inner">
              <li>{elements.name}</li>
              <li>{elements.age}</li>
              <li>{elements.email}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default FriendsList;
