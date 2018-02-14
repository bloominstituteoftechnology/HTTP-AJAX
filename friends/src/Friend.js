import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
  return (
    <div>
      {props.friend.map(friend => {
        return (<div>
          <div>Name: {friend.name}</div>
          <div>Age: {friend.age}</div>
          <div>Email: {friend.email}</div>
          <button onClick={() => {props.deleteFriend(friend.id)}}>Delete</button>
        </div>
      )})}
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.array.isRequired
};

Friend.defaultProps = {
  friend: []
};

export default Friend;
