import React from 'react';
import Friend from "./Friend"

const FriendsList = props => {
    return (
    <div className="friendList">
        {props.friends.map((friend) => 
            <Friend
                friend={friend}
                key={friend.id}
            />
        )}
    </div>
    );
};

export default FriendsList;