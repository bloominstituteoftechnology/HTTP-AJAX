import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map((friend, index) => <Friend key={index} friend={friend} handleSetData={props.handleSetData} />)}
        </div>
    );
}

export default FriendsList;