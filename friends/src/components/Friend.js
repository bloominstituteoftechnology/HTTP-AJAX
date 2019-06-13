import React from "react";

const Friend = props => {
  console.log(props);
  return (
    <div className="friend-card">
      <div className="friend-icon">
        <div className="friend-icon-top">
          <i class="fas fa-user fa-xs" />
        </div>

        <div className="edit-delete-button-holder">
          <div className="edit">
            <i class="fas fa-edit" />
          </div>
          <div className="delete">
            <i
              onClick={() => props.deleteFriend(props.friends.id)}
              class="fas fa-trash-alt"
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
