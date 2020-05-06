import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return <FriendCard friend={friend} />
            })}
        </div>
    );
    // iterate over props.friends
    //return a new array of elements for the React Virtual DOM
};

export default FriendsList;