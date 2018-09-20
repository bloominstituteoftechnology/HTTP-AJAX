import React from 'react';

function Friends(props) {
    return (
        <div className="bigFriendBox">
            <h2 className="friendBox"> Friends Name: {props.friend.name}</h2>
            <h3 className="friendBox"> Friends Email: {props.friend.email}</h3>
            <h3 className="friendBox"> Friends Age: {props.friend.age}</h3>
        </div>
    )
}

export default Friends;