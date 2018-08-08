import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = props => {
    return (
        <div>
            <Link to={`/friends/${props.friend.id}`}>
                <div>
                    <p>Name: {props.friend.name}</p>
                </div>
                <div>
                    <p>Age: {props.friend.age}</p>
                </div>
                <div>
                    <p>Email: {props.friend.email}</p>
                </div>
            </Link>
        </div>
    )
}

export default FriendCard;