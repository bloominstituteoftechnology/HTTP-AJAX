import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const FriendCard = ({passedFriends}) => {
  
  

  return(
    <div className="row">
    {passedFriends.map(friend => (
    <div key={friend.id} className="col-4 mb-3">
      <Card>
        <CardBody>
          <CardTitle>Name: {friend.name}</CardTitle>
          <CardSubtitle>Age: {friend.age}</CardSubtitle>
          <CardText>Email: {friend.email}</CardText>
          <Button>Place Holder Button</Button>
        </CardBody>
      </Card>
    </div>
    ))}
      
    
    


      {/* <Card>
        <CardBody>
          <CardTitle>Name: {friend.name}</CardTitle>
          <CardSubtitle>Age: {friend.age}</CardSubtitle>
          <CardText>Email: {friend.email}</CardText>
          <Button>Place Holder Button</Button>
        </CardBody>
      </Card> */}
    </div>
  )
}

export default FriendCard;