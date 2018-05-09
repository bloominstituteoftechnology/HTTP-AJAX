import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const FriendCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{props.mail}</CardSubtitle>
                    <CardText>{props.age}</CardText>
                    <Button>Awesome!</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default FriendCard;