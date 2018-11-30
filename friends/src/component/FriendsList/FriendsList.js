import React from "react";
import { Link } from "react-router-dom";
import "./FriendsList.css";
import FriendsForm from "../FriendsForm/FriendsForm";

function FriendsList(props) {
  console.log(props.friends);

  return (
    <div className="friends-wrapper">
      {props.friends.map(friend => (
        <div className="friends-card" key={friend.id}>
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h2>{friend.email}</h2>
          <div className="btn-container">
            <div className="btn-link">
              <Link to="/friendsform">
                <button
                  className="update-friend"
                  onClick={() =>
                    props.update(
                      friend.id,
                      "friend.name",
                      "friend.age",
                      "friend.email"
                    )
                  }
                >
                  Update
                </button>
              </Link>
            </div>
            <button className="delete" onClick={() => props.del(friend.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="update" />
      <FriendsForm />
    </div>
  );
}

export default FriendsList;
