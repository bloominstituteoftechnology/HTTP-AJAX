import React from 'react';
import Friend from './Friend';

// Takes in props:
// - friends: []

const FriendsList = (props) => {
    return(
        <div className='friendsList'>
            {props.friends.map( friend => {
                // Pass friend.id, friend.name, friend.email, friend.age to Friend
                return(
                    <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
                );
            } )}
        </div>
    );
};

export default FriendsList;