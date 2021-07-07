import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { Card, CardTitle, CardBody, CardSubtitle, Col } from 'reactstrap';


import './Friend.css';


const Friend = props => {
    console.log(props)
    return (
        
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{props.friend.name}</CardTitle>
                        <CardSubtitle>Age: {props.friend.age}</CardSubtitle>
                        <CardSubtitle>{props.friend.email}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>

    );
}

export default Friend;

