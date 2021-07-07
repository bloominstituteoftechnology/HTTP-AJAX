import React from 'react';
import {Card, CardBody, CardText} from 'reactstrap';
import '../components/FriendsList.css';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Card className="Main-card" key={friend.id}>
            <CardBody>
              <CardText>Name:<br/>{friend.name}</CardText>
              <CardText>Age:<br/>{friend.age}</CardText>
              <CardText>Email:<br/>{friend.email}</CardText>
            </CardBody>
          </Card>
          )
      })}
    </div>
  )
}

export default FriendsList;