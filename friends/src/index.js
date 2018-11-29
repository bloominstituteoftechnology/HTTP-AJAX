import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddFriendsForm from "./components/AddFriendsForm";
import Friend from "./components/Friend";
import FriendsList from "./components/FriendsList";

ReactDOM.render(
  <Router>
    <App>
      <Route
        exact
        path="/friend"
        render={props => <FriendsList {...props} />}
      />
      <Route exact path="/friend/:id" render={props => <Friend {...props} />} />
      <Route
        exact
        path="/addfriend"
        render={props => <AddFriendsForm {...props} />}
      />
      <Route
        exact
        path="/friend-edit/:id"
        render={props => <AddFriendsForm {...props} />}
      />
    </App>
  </Router>,
  document.getElementById("root")
);
