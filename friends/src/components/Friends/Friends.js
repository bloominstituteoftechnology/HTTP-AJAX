import React, { Fragment } from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

const Friends = props => {
  return (
    <Fragment>
      <div>
        <AddFriendForm newTextHandler={props.newTextHandler} />
      </div>
      <div>
        {props.data.map(props => {
          return <Friend friend={props} key={props.id} />;
        })}
      </div>
    </Fragment>
  );
};

export default Friends;
