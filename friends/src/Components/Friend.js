import React from "react";
import LinkButton from "./LinkButton";

const Friend = props => {
  const remove = e => {
    e.preventDefault();
    props.deleteFriend(friend.id);
    props.history.push("/");
  };

  let id;
  let friend;

  if (props.match && props.match.params.id) {
    id = props.match.params.id;
  } else {
    id = props.friend.id;
  }

  if (Array.isArray(props.friend)) {
    friend = props.friend.find(friend => friend.id === Number(id));
  } else {
    friend = props.friend;
  }

  return friend === undefined ? (
    <div>
      <h1>Friend Not Found</h1>
      <LinkButton to="/">Home</LinkButton>
    </div>
  ) : (
    <div className="friend">
      <h2>{friend.name}</h2>
      <p>age: {friend.age}</p>
      <p>email: {friend.email}</p>
      <button onClick={remove}>Delete</button>
    </div>
  );
};

export default Friend;
