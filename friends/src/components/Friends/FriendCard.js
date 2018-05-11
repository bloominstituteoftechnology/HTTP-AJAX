import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import axios from 'axios';


const FriendCard = (props) => {
  return (
    <div>
        <Card className="Friend-card">
                <CardBody>
                  <CardTitle>{props.friend.name} </CardTitle>
                    <CardSubtitle>{props.friend.email}</CardSubtitle>
                    <CardText>{props.friend.age}</CardText>
                </CardBody>
            </Card>
    </div>
  )
}

export default FriendCard;