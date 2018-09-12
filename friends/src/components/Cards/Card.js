import React from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, CardGroup } from 'mdbreact';

const CardSingle = (props) => {
    return (
        <CardGroup>
            <Card style={{width: '22rem', marginTop: '1rem'}} className="text-center">
            <CardHeader color="deep-orange lighten-1">{props.friend.name}</CardHeader>
            <CardBody>
            <CardTitle>Information</CardTitle>
            <CardText>Age: {props.friend.age}</CardText>
                <CardText>Email: {props.friend.email}</CardText>
            <Button color="deep-orange lighten-1" size="sm">Edit</Button>
            </CardBody>
            <CardFooter color="deep-orange lighten-1">2 days ago</CardFooter>
            </Card>
        </CardGroup>
    )
}

export default CardSingle;