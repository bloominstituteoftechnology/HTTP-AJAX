import React from 'react';
import {Card, CardTitle, CardBody} from 'reactstrap';
import './Friend.css';

const Friend = props=> {
    return (
        <Card className='friend-card'>
            <CardTitle className='friend-title'>{props.friend.name}</CardTitle>
            <CardBody className='friend-info'>{props.friend.name} is {props.friend.age} years old and I can reach them at <span className='friend-email'>{props.friend.email}</span>.</CardBody>
        </Card>
    );
}

export default Friend;