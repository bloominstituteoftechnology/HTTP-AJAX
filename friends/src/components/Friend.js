import React from "react";
import { Link } from "react-router-dom";

const Friend = props => {
  console.log(props);

  return (
    <div className="friend-card">
      <div className="friend-icon">
        <div className="friend-icon-top">
          <i className="fas fa-user fa-xs" />
        </div>

        <div className="edit-delete-button-holder">
          <div className="edit">
            <Link to="/update-friend">
              <i
                onClick={e => props.setUpdateForm(e, props.friends)}
                className="fas fa-edit"
              />
            </Link>
          </div>
          <div className="delete">
            <i
              onClick={() => props.deleteFriend(props.friends.id)}
              className="fas fa-trash-alt"
            />
          </div>
        </div>
      </div>
      <div className="friend-details">
        <h3>{props.friends.name}</h3>
        <h4>Age: {props.friends.age}</h4>
        <h4>Email: {props.friends.email}</h4>
      </div>
    </div>
  );
};

export default Friend;
