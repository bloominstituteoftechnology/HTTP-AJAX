import React, { Fragment } from "react";

const FriendCard = props => {
  console.log("FriendCard", props);
  return (
    <Fragment>
      <h2>{props.friends.name}</h2>
    </Fragment>
  );
};

export default FriendCard;
