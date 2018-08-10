import React from "react";
// import { Link, NavLink, Route } from "react-router-dom";
import { Card, CardTitle, CardBody, CardSubtitle, Col } from 'reactstrap';


import './FriendDetails.css';


class FriendDetails extends React.Component {
    constructor (props) {
    super(props);
    }
    
    render () {
        const friend = this.props.friends.find(friend => friend.id === this.props.match.params.id);

        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{friend.name}</CardTitle>
                        <CardSubtitle>Age: {friend.age}</CardSubtitle>
                        <CardSubtitle>{friend.email}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        );

    }

}

export default FriendDetails;