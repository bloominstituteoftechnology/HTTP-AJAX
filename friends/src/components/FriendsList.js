import React from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend';

const FriendsList = props => (
    <div className="list-container">
        <Link to="/add" className="add-button">Add Friend</Link>
        <div className="list">
            {props.friends.map(friend => (
                <Friend name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    id={friend.id}
                    key={friend.id}
                    deleteFriend={props.deleteFriend}
                    handleUpdate={props.editFriend}
                />
            ))}
        </div>
    </div>
);

export default FriendsList;