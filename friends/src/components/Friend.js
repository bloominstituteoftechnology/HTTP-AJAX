import React from "react";

const Friend = props => {

  if (props.friend) {
    return (
      <div>
        <h1>Name: {props.friend.name}</h1>
        <h4>Age: {props.friend.age}</h4>
        <h4>Email: {props.friend.name}</h4>
        <button onClick= {(id) => props.deleteFriend(props.friend.id)}>Delete Friends</button>
      </div>
    );
  } else {
    return <h1>Waiting</h1>;
  }
};

export default Friend;
