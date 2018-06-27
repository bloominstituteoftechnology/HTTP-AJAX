import React from "react";
import Friends from "./Friends";
import AddFriendForm from "./AddFriendForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const FriendsList = props => {
  return (
    <div>
      [FRIENDS LIST]
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/friends"}>Friends</Link>
        </li>
      </ul>
      <Friends data={props.data} />
      <AddFriendForm />
    </div>
  );
};

export default FriendsList;
