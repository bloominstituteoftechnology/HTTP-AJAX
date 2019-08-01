import React from "react";

const Friend = props => {
  return (
    <div>
      <h3>{Friend.name}</h3>
      <p>{Friend.age}</p>
      <p>{Friend.email}</p>
    </div>
  );
};

export default Friend;
