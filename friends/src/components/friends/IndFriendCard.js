import React, { Fragment } from "react";

import EditDeleteButtons from "../editDeleteButtons/EditDeleteButtons";
import "./Friend.css";

const IndFriendCard = props => {
  let indName = "";
  let age = 0;
  let email = "";
  console.log("IndFriendCardRoute", props.match.params.name, props.data);
  for (let i = 0; i < props.data.length; i++) {
    let name = props.data[i].name;
    let activeName = props.match.params.name;
    if (activeName === name) {
      console.log("Match");
      indName = name;
      age = props.data[i].age;
      email = props.data[i].email;
    }
  }
  return (
    <Fragment>
      <div className="individualCard">
        <h1>{indName}</h1>
        <h2>{age}</h2>
        <h2>{email}</h2>

        <EditDeleteButtons data={props.data} />
      </div>
    </Fragment>
  );
};

export default IndFriendCard;
