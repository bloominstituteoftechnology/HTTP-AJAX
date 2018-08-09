import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import EditDeleteButtons from "../editDeleteButtons/EditDeleteButtons";
import "./Friend.css";

const IndFriendCard = props => {
  console.log("IndFriendCard", props);
  return (
    <div className="individualCard">
      <h2>{props.match.params.name}</h2>

      <EditDeleteButtons data={props.data} />
    </div>
  );
};

const IndFriendCardRoute = props => {
  console.log("IndFriendCard", props);
  return (
    <Fragment>
      <Route
        path={`/friends/${props.friends}`}
        render={props => <IndFriendCard {...props} data={props.friend} />}
      />
    </Fragment>
  );
};

export default IndFriendCard;
