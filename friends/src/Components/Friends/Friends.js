import React from 'react';
import FriendsInput from './FriendsInput';


const getFriends = props => (
    <div className='friendsList'>
        {props.friends.map(friend => (
            <div key={friend.id}>
                <p><span>Name:</span>{friend.name}</p>
                <p><span>Age:</span>{friend.age}</p>
                <p><span>Email:</span>{friend.email}</p>
            </div>
        ))}
    </div>
);

export default FriendsInput;