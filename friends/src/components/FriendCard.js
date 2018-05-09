import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const FriendCard = ({friend}) => {
  console.log("from FriendsList", friend)

  return(
    <div className="col-4">
      <Card>
        <CardBody>
          <CardTitle>Name: {friend.name}</CardTitle>
          <CardSubtitle>Age: {friend.age}</CardSubtitle>
          <CardText>Email: {friend.email}</CardText>
          <Button>Place Holder Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default FriendCard;