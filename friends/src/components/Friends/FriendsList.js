import React from "react";
import Friends from "./Friends";
import AddFriendForm from "./AddFriendForm";
import { Route, Link } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";

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
      <Friends data={props.f} />
      {/*<Route path={"/friends"} component={AddFriendForm} />*/}
    </div>
  );
};

export default FriendsList;
