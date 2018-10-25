import React from 'react';

import Friend from './Friend';
import AddFriend from './AddFriend';

// Takes in props:
// - friends: []
// - handleSubmit: fn()
// - handleChange: fn()

const FriendsList = (props) => {
    return(
        <div className='friendsList'>
            {/* Pass handlers to AddFriend */}
            <AddFriend handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
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