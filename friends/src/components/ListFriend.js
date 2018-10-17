import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListFriend(props) {
    function routeToFriend(ev, friend) {
        ev.preventDefault();
        props.history.push(`/list-friend/${friend.id}`);
    }

    return (
        <div className='friend-list-wrapper'>
            {props.friends.map(friend => (
                <p>{friend.name}</p>
            ))}
        </div>
    )
}

export default ListFriend;