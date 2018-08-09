import React, { Fragment } from "react";

import "./Friend.css";

const FriendCard = props => {
  return (
    <Fragment>
      <div className="friendCardWrapper">
        <h2>{props.friends.name}</h2>
        <h4>{props.friends.age}</h4>
        <h4>{props.friends.email}</h4>
      </div>
    </Fragment>
  );
};

export default FriendCard;
