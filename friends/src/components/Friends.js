import React from "react";
import { Button } from "reactstrap";

const Friends = props => {
  return (
    <div className="friends">
      {props.friends.map(friend => (
        <div className="friend" key={friend.id}>
          <h4>
            <a href={`mailto:${friend.email}`}>{friend.name}</a> is {friend.age} years old.
          </h4>
          <div className="friend-btns">
            <Button id={friend.id} color="success">
              Update
            </Button>
            <Button id={friend.id} onClick={props.delete} color="danger">
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
