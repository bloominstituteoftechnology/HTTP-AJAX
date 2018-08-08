import React, { Fragment } from "react";

import FriendCard from "./FriendCard";
import "./Friend.css";

const Friend = props => {
  return (
    <Fragment>
      <div className="friendWrapper">
        {props.friends.map(friend => {
          return <FriendCard friends={friend} key={friend.id} />;
        })}
      </div>
    </Fragment>
  );
};

export default Friend;
