import React from 'react'; 
import Friend from './Friend'; 

const FriendsList = (props) => {
    return (
        <div className = "friendsList">
        {props.friends.map(friend => <Friend name = {friend.name} age = {friend.age} email = {friend.age} key = {friend.id}/>)}
        </div>
    )
}

export default FriendsList; 
