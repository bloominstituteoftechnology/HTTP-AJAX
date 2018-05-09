import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const FriendsList = props => {
  console.log(props.friends);
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Card key={friend.id + friend.name} className="Friend-card">
            {/* <CardImg top width="10%" src="https://images.spoilertv.com/cache/archived-old-shows/friends/season_10/friends-logo-white-type_FULL.jpg" alt="Card image cap" /> */}
              <CardBody>
                <CardTitle>{friend.name} </CardTitle>
                  <CardSubtitle>{friend.email}</CardSubtitle>
                  <CardText>{friend.age}</CardText>
              </CardBody>
          </Card>
        );
      })}
    </div>
  );
};
export default FriendsList;