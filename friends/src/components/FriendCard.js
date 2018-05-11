import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const FriendCard = (props) => {
  
 

  return(
    <div className="row">
    {props.passedFriends.map(friend => (
    <div key={friend.id} className="col-4 mb-3">
      <Card>
        <CardBody>
          <CardTitle>Name: {friend.name}</CardTitle>
          <CardSubtitle>Age: {friend.age}</CardSubtitle>
          <CardText>Email: {friend.email}</CardText>
          <CardText>City: {friend.city}</CardText>
          <Link to="/edit">
            <Button onClick={() => props.handleGatherForUpdate(friend)} className="m-2">Update</Button>
          </Link>
          <Button onClick={() => props.handleDelete(friend.id)} className="m-2">Delete</Button>
          
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