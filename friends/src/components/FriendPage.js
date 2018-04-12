import React from "react";

const FriendPage = props => {
  return (
    <div className="showFriend">
      {" "}
      <ul>
        <li className="friend"> {props.location.state.name}</li>
        <li className="friend"> {props.location.state.age}</li>
        <li className="friend"> {props.location.state.email}</li>
        <button onClik={props.history.goBack}>Go Back </button>
      </ul>{" "}
    </div>
  );
};

export default FriendPage;
