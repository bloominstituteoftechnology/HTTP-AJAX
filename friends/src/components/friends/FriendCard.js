import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Friend.css";

const FriendCard = props => {
  console.log("FriendCard", props);
  return (
    <Fragment>
      <Link
        to={`/friends/${props.friends.name}`}
        className="friendCardWrapper"
        // onClick={props.activeFriendHandler(props)}
      >
        <h2>{props.friends.name}</h2>
        <h4>{props.friends.age}</h4>
        <h4>{props.friends.email}</h4>
      </Link>
    </Fragment>
  );
};

export default FriendCard;
