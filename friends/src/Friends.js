import React from 'react';
import { Card, Button, CardTitle,
    CardText, CardGroup, CardBody } from 'reactstrap';
import './Friends.css';

const Friends = ({ friends }) => {
    return (
      <div className="main-div">
      <CardGroup className="card-group">
        <Card>
          <CardBody className="card-body">
            <CardTitle>{friends.name}</CardTitle>
            <CardText>{friends.age} years old</CardText>
            <CardText>{friends.email}</CardText>
            <Button>More Info</Button>
          </CardBody>
        </Card>
      </CardGroup>
      </div>
    );
  };

export default Friends;