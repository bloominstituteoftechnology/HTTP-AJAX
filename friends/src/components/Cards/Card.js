import React from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, CardGroup } from 'mdbreact';
import TimeAgo from 'react-timeago'
import moment from 'moment';

const CardSingle = (props) => {
    let da = Date.now();
    let a = moment.utc(da).format('LL')
    return (
        <CardGroup>
            <Card style={{width: '22rem', marginTop: '1rem'}} className="text-center">
            <CardHeader color="deep-orange lighten-1">{props.friend.name}</CardHeader>
            <CardBody>
            <CardTitle>Information</CardTitle>
            <CardText>Age: {props.friend.age}</CardText>
                <CardText>Email: {props.friend.email}</CardText>
            <Button color="deep-orange lighten-1" size="sm">Edit</Button>
            <Button onClick={() => props.handleDelete(props.friend.id)} color="red accent-4" size="sm">Delete</Button>
            </CardBody>
            <CardFooter color="deep-orange lighten-1"><TimeAgo date={a} /></CardFooter>
            </Card>
        </CardGroup>
    )
}

export default CardSingle;