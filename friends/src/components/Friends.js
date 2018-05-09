import React, { Component } from "react";

const Friends = ({ Friend }) => {
  <div>
    <div>List Of Friends</div>
    {Friends.map(Friend => (
      <div key={friends.id}>
        <div>{friends.name}</div>
        <div>{friends.email}</div>
        <div>{frineds.age}</div>
      </div>
    ))}
  </div>;
};
