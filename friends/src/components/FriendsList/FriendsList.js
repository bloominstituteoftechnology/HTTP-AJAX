import React from 'react';
import Friend from './Friend';
const FriendsList = (props) => {
    return (
        <ul>
        {props.friendsData.map(friend => {
            return <Friend key = {friend.id} name = {friend.name} />
        })}
        </ul>
    );
}
 
export default FriendsList;