import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';

const FriendList = (props) => {
    return (
        <div>
            {props.friends.map(person => (
                <div key = {person.id}>                
                <Card className =' friend-card'>
                    <CardHeader>{person.name}</CardHeader>
                    <CardBody>
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