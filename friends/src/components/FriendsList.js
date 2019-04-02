import React from 'react';
import './FriendsList.css';
import FriendCard from './FriendCard';

const FriendsList = props => {
    return (
        <div className="friends-list-wrapper">
            {props.friends.map(friend => <FriendCard key={friend.id} name={friend.name} age={friend.age} email={friend.email} />)}
          </div>
    );
}

export default FriendsList;