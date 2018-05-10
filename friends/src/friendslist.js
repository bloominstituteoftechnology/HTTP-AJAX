import React from 'react';
import './index.css';
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';

const FriendsList = (props) => {
    return (
            <div className = "container">{props.friends.map((friend)=>{
                return <div key={friend.id}>
                <Card className = "cardStyle">
                    <CardBody>
                            <CardTitle>
                        <div>{friend.name}</div>
                        </CardTitle>
                            <CardText>
                            <div>{friend.age}</div>
                            </CardText>
                            <CardText>
                            <div>{friend.email}</div>
                            </CardText>
                        <Button color="primary" onClick={() => {props.delete(friend.id)}}>Delete</Button>
                    </CardBody>  
                </Card>
            </div>
        })}
        </div>
    )
}

export default FriendsList;