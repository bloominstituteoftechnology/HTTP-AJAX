import React from "react";
import Friend from "./Friend";

const Friends = props => {
  return (
    <div>
      {/* {props.data.map(f => {
        return <div>{f.name}</div>;
      })} */}
      {props.data.map(props => {
        return <Friend friend={props} key={props.id} />;
      })}
    </div>
  );
};

export default Friends;
