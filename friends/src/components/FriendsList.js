import React from 'react';
import FriendsForm from './FriendsForm';
import {Button} from 'reactstrap';


const FriendsList = (props) => {

return (
    <div>
    {props.items.map(friend => (
        <div
        key={friend.id}>

        <h2>{friend.name}</h2>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <Button onClick={event => props.deleteFriend(event, friend.id)}>
        Delete
        </Button>
            </div>
    ))}

        <FriendsForm {...props} />
    </div>
)
}



export default FriendsList;