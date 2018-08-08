import React from "react";
import { Button, Tooltip } from "reactstrap";

const Friends = props => {
  return (
    <div className="friends">
      {props.friends.map(friend => (
        <div className="friend" key={friend.id}>
          <h4>
            <a href={`mailto:${friend.email}`}>{friend.name}</a> is {friend.age} years old.
          </h4>
          <div className="friend-btns">
            <Button id={friend.id} onClick={props.update} color="success">
              <span id="update-tooltip">Update</span>
            </Button>
            <Tooltip placement='bottom' isOpen={props.open} target="update-tooltip" toggle={props.toggle}>
              Use the form and then click here!
            </Tooltip>
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
