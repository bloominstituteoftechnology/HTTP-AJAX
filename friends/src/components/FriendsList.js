import React from 'react';
import { Card, CardHeader, CardBody, CardSubtitle, CardText, CardLink } from 'reactstrap';
import * as Icon from 'react-feather';
import './FriendsList.css';

const friendsList = (props) => {
    return (
            <div className="card-container">
                <Card body outline color="secondary">
                    <CardHeader tag="h3">
                        <Icon.User className="user-icon"/>
                        <p className="friend-name">{props.friend.name}</p>
                    </CardHeader>
                    <CardBody>
                        <CardSubtitle>Age: </CardSubtitle>
                        <CardText>{props.friend.age}</CardText>
                        <CardSubtitle>Email: </CardSubtitle>
                        <CardText>{props.friend.email}</CardText>
                        <CardLink><Icon.Edit className="link-icon"/></CardLink>
                        <CardLink><Icon.Trash className="link-icon"/></CardLink>
                    </CardBody>
                </Card>
            </div>
        )
}

export default friendsList