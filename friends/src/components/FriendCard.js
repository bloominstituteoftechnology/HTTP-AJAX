import React from 'react';
import { Container, Card, CardHeader, CardBody, CardText, Col, Row } from 'reactstrap'

const FriendCard = props => {
    const { id, name, age, email } = props.friend;
    return (
                <Card className="mt-5">
                    <CardHeader>{name}</CardHeader>
                    <CardBody className="text-left">
                        <CardText>Age: {age}</CardText>
                        <CardText>Email: {email}</CardText>
                        <CardText>Id: {id}</CardText>
                    </CardBody>
                </Card>
    )
}

export default FriendCard;