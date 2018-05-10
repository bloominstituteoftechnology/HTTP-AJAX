import axios from 'axios';
import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './FriendsComponent.css';
const FriendsComponent = ({ friends }) => 


    <div>
        {friends.map(friend =>
            <div key={friend.id}>
                <Card className="cardColor">
                    <CardBody>
                        <CardTitle>{friend.name}</CardTitle>
                        <CardBody>{friend.age}</CardBody>
                        <CardSubtitle>{friend.email}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )}
    </div>


export default FriendsComponent;