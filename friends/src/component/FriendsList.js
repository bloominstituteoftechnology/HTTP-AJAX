import React from 'react';

const FriendsList = (props) => {

    const deleteFriend = e => {
        e.preventDefault();
        props.deleteFriend();
    }

    const updateFriend = e => {
        e.preventDefault();
        props.updateFriend();
    }
    return ( 
        <div className='friend-card'>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
            <button onClick={deleteFriend}>Delete</button>
            <button onClick={updateFriend}>Update</button>
        </div>
     );
}
 
export default FriendsList;