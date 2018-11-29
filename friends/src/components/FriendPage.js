import React, { Component } from 'react';

const FriendPage = props => {
    console.log(props);

    const friendId = props.match.params.id;
    console.log(friendId);
    const friend =  props.friends[friendId-1]
    console.log(friend);
    return (
        <div className="friend">
            <h2>{friend.name}</h2>
            <h4>{friend.age}</h4>
            <p>{friend.email}</p>
        </div>
        
    );
}

export default FriendPage;