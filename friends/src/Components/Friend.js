import React from "react";

const Friend = props => {
  const remove = e => {
    e.preventDefault();
    props.deleteFriend(props.person.id);
  };

  return (
    <div className="friend">
      <h2>{props.person.name}</h2>
      <p>age: {props.person.age}</p>
      <p>email: {props.person.email}</p>
      <button onClick={remove}>Delete</button>
    </div>
  );
};

export default Friend;
