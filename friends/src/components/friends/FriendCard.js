import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import "./Friend.css";
import EditDeleteButtons from "../editDeleteButtons/EditDeleteButtons";

const FriendCard = props => {
  return (
    <Fragment>
      <div className="friendCardWrapper">
        <h2>{props.friends.name}</h2>
        <h4>{props.friends.age}</h4>
        <h4>{props.friends.email}</h4>
        <Route path="/" component={EditDeleteButtons} />
      </div>
    </Fragment>
  );
};

export default FriendCard;
