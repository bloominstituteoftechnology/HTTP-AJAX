import React from "react";
import Friend from "./friend";

const Friends = props => {
  return (
    <div>
      {props.friendsData.map(item => (
        <Friend
          key={item.id}
          item={item}
          deleteFriend={props.deleteFriend}
          inputChange={props.inputChange}
          name={props.name}
          age={props.age}
          email={props.email}
          click={props.click}
        />
      ))}
    </div>
  );
};

export default Friends;
