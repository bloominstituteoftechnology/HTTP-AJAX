import React from "react";
import { Link } from "react-router-dom";

const FriendCard = props => {
  const friend = props.data.find(
    friend => friend.id.toString() === props.match.params.id
  );

  return (
    <div className="friend-card">
      <div className="friend-info">
        <h1>{friend.name}</h1>
        <h2>Age: {friend.age}</h2>
        <h2>{friend.email}</h2>
      </div>
      <div className="edit-btn">
        <Link to={`/edit-form/${friend.id}`}>
          <button>Update</button>
        </Link>
      </div>
      <div className="delete-btn">
        <button
          onClick={() => {
            props.deleteFriend(props.match.params.id);
            props.history.push(`/`);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FriendCard;
