import React from "react";
import Friend from "./Friend";

const Friends = props => {
  return (
    <div>
      {props.data.map(f => {
        return <div>{f.name}</div>;
      })}
    </div>
  );
};

export default Friends;
