import React from "react";

export default function Friend(props) {
  return (
    <div>
      <h2>
        {props.name}
        <span onClick={() => props.deleteItem(props.match.params.friend.id)}>
          X
        </span>
      </h2>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
}
