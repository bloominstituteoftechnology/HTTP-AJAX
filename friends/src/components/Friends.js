import React from "react";

const Friends = ({ friends }) => {
  <div>
    <div>List Of Friends</div>
    {Friends.map(Friend => (
      <div key={friends.id}>
        <div>{friends.age}</div>
        <div>{friends.name}</div>
        <div>{friends.email}</div>
      </div>
    ))}
  </div>;
};
