import React from "react";

const Friend = props => (
  <div className="friend">
    <h2>
      <span
        className="update"
        onClick={() =>
          props.toggleUpdateForm(
            props.friend.id,
            props.friend.name,
            props.friend.age,
            props.friend.email
          )
        }
      >
        update
      </span>
      {props.friend.name}
      <span
        className="close"
        onClick={() => props.deleteFriend(props.friend.id)}
      >
        x
      </span>
    </h2>
    <p>{props.friend.age}</p>
    <p>{props.friend.email}</p>
  </div>
);

export default Friend;
