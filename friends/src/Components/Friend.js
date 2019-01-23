import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <h2>{props.person.name}</h2>
      <p>age: {props.person.age}</p>
      <p>email: {props.person.email}</p>
    </div>
  );
};

export default Friend;
