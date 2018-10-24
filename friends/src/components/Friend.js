import React from "react";
import { Route, Switch } from "react-router-dom";

import FriendCard from "./FriendCard";

export default class Friend extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/friends">
            <div>
              <h1>{this.props.friend.name}</h1>
              <div>{`Age: ${this.props.friend.age}`}</div>
              <div>{`Email: ${this.props.friend.email}`}</div>
            </div>
          </Route>
          <Route
            path={`/friends/${this.props.friend.id}`}
            render={props => (
              <FriendCard
                {...props}
                friend={this.props.friend}
                updateFriend={this.props.updateFriend}
                deleteFriend={this.props.deleteFriend}
              />
            )}
          />
       </Switch>
      </>
    );
  }
}
