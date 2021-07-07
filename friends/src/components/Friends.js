import React from "react";

const Friends = props => {
  return (
    <div>
      {console.log(props.friendsList)}
      {props.friendsList.map(each => {
        return (
          <div className="friend-list">
            <div>{each.name}</div>
            <div>{each.age}</div>
            <div>{each.email}</div>
            <button onClick={() => props.deleteFriend(each.id)}>Delete</button>
            <button onClick={() => props.editFriend(each.id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;

