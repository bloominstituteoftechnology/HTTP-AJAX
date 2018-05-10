import React from 'react';
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import FriendDetails from './FriendDetails';

class FriendCard extends FriendDetails {
    render() {
        return(
            <div className = "friends">
                {this.state.friends.map(friend => {
                    return (
                        <div>
                            <Card key = {friend.id} className = "friend">
                                <CardBody>
                                    <CardTitle>Name - {friend.name}</CardTitle>
                                    <CardSubtitle>Age - {friend.age}</CardSubtitle>
                                    <CardText>Email - {friend.email}</CardText>
                                    <br/>
                                </CardBody>
                            </Card>            
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendCard;
