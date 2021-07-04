import React from 'react';
import AddFriend from './AddFriend';

const FriendsList = props => {
    return (
        <div className="friends-list">
        {props.friends.map(friend => {
            return (
            <div key={friend.id}>{friend.name}</div>
            )
        })}
        <AddFriend 
        newFriend={props.newFriend}
        textHandler={props.textHandler}
        addFriend={props.addFriend}
        />
        </div>
    )
}

export default FriendsList;