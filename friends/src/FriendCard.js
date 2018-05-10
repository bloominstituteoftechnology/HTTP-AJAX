import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const FriendCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>E-mail: {props.mail}</CardSubtitle>
                    <CardText>Age: {props.age}</CardText>
                    <div className="d-flex justify-content-center">
                        <Link to={`/update/edit/${props.id}`}>
                            <Button className="mx-3">Update</Button>
                        </Link>
                        <Button className="btn btn-danger mx-3" onClick={() => props.delete(props.id)}>Delete</Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default FriendCard;