import React from 'react';
import { Link } from 'react-router-dom';

import './FriendsList.css';
import FriendCard from './FriendCard';

const FriendsList = props => {
    return (
        <div className="friends-list-wrapper">
            {props.friends.map(friend => <Link to={`/friends/${friend.id}`} key={friend.id}><FriendCard friend={friend} /></Link>)}
          </div>
    );
}

export default FriendsList;