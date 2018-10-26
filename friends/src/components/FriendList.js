import React from "react";
import { Route } from "react-router-dom";

import NewFriendForm from "./NewFriendForm";

import {
  Card,
  CardLink,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardColumns
} from "reactstrap";

export default class FriendList extends React.Component {
  render() {
    return (
      <div className="listDiv">
        <CardColumns>
          {this.props.friends.map(friend => (
            <div key={friend.id}>
              <Card sm="6">
                <CardBody>
                  <CardTitle>
                    <CardLink href={`/friends/${friend.id}`}>
                      {friend.name}
                    </CardLink>
                  </CardTitle>
                  <CardSubtitle>{`Age: ${friend.age}`}</CardSubtitle>
                  <CardSubtitle>{`Email: ${friend.email}`}</CardSubtitle>
                  
                  <CardText>
                    {`Email: ${friend.description}`}
                  </CardText>
                  <Button
                    onClick={() => this.props.deleteFriend(friend)}
                  >{`Delete ${friend.name}`}</Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </CardColumns>
        <Route
          exact
          path="/friends"
          render={props => (
            <NewFriendForm
              {...props}
              inputChange={this.props.inputChange}
              addNewFriend={this.props.addNewFriend}
              numberInputChange={this.props.numberInputChange}
              newFriend={this.props.newFriend}
            />
          )}
        />
      </div>
    );
  }
}
