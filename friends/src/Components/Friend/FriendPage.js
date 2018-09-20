import React, { Fragment } from 'react';
import './Friend.css';

export default function FriendPage(props) {
    console.log(props.friendsData)
    const friend = props.friendsData.find(
        friend => friend.id === parseInt(props.match.params.id)
    )

    return (
        <div className="FriendPage">
            <h1>Name: {friend.name}</h1>
            <p><em>Age:</em> {friend.age}</p>
            <p><em>Contact:</em>{friend.email}</p>
        </div>
    )
}
