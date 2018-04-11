import React from 'react';
import './FriendList.css';

const FriendList = props => {
    return (
        <div className="friendList">
            {props.friends.map((friend, index) => (
                <div className="friends" key={friend.id + index}>
                    <div className="friends_name" >{friend.name}</div>
                    <div className="friends_age" >{friend.age}</div>
                    <div className="friends_email" >{friend.email}</div>
                </div>
            ))}
            {props.newFriend.map((friend, index) => (
                <div className="friends" key={friend.id + index}>
                    <div className="friends_name" >{friend.name}</div>
                    <div className="friends_age" >{friend.age}</div>
                    <div className="friends_email" >{friend.email}</div>
                </div>
            ))}
        </div>
    );
};

export default FriendList;