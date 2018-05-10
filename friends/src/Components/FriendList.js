import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const FriendList = (props) => {

    return (
        <div className = 'card-container row'>
            {props.friends.map(person => (
                <div key = {person.id}>                
                <Card className =' friend-card'>
                <CardBody>
                    <CardText>{person.name}</CardText>
                    <CardText>{person.age}</CardText>
                    <CardText>{person.email}</CardText>
                </CardBody>  
                </Card>             
                </div>
            ))}
       </div>
    )
}

export default FriendList;