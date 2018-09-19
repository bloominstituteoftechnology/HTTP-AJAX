import React from 'react';

function Friends(props) {
    return (
        <ul className="FriendsDiv">
            {props.friendsData.map((friend) => 
                (<li key={friend.id}>{friend.name}</li>)
            )}
        </ul>
    )
}

export default Friends;