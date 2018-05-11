import axios from 'axios';
import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './FriendsComponent.css';
import {Link} from 'react-router-dom';

const FriendsComponent = ({ friends, deleteFriend }) => 

    <div>
        {friends.map(friend =>
            <div key={friend.id}>
                <Card className="cardColor">
                    <CardBody>
                        <CardTitle>{friend.name}</CardTitle>
                        <CardBody>{friend.age}</CardBody>
                        <CardSubtitle>{friend.email}</CardSubtitle>
                        <button onClick= {() => deleteFriend(friend.id)}>Delete</button>
                        <Link to={`/update/${friend.id}`}><button>Update</button></Link>
                    </CardBody> 
                </Card>
            </div> 
        )}
    </div>


export default FriendsComponent;