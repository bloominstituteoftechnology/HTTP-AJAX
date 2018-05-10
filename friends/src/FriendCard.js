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
                    <div className="d-flex justify-content-center">
                        <Button className="mx-3">Awesome!</Button>
                        <Button className="mx-3" onClick={() => props.delete(props.id)} className="btn btn-danger">Delete</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default FriendCard;