import React from "react";

const FriendDisplay = props => {
    return (
        <div className="friends-display-container">
            {props.friends.map(friend => (
                <div className="friend-card">
                    <h2>{friend.name}</h2>
                    <p>Age: <strong>{friend.age}</strong></p>
                    <p>{friend.email}</p>
                </div>
            ))}
        </div>
    );
}

export default FriendDisplay;