import React from "react";

const Friend = props => {
  // console.log(props);
  return (
    <div classname="col s12 m6">
      <div className="container">
        <div className="card">
          <h3>{props.friend.name}</h3>
          <p>Age: {props.friend.age}</p>
          <p>Email: {props.friend.email}</p>
          {/* <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Friend;
