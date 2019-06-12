import React from 'react';
import { Link } from 'react-router-dom';

import './FriendsList.css';
import FriendCard from './FriendCard';
import AddFriendForm from './AddFriendForm';

const FriendsList = props => {
    return (
        <div className="content">
            <AddFriendForm addFriend={props.addFriend} />
            <div className="friends-list-wrapper">
                {props.friends.map(friend => <Link to={`/friends/${friend.id}`} key={friend.id}><FriendCard friend={friend} /></Link>)}
            </div>
        </div>
    );
}

export default FriendsList;