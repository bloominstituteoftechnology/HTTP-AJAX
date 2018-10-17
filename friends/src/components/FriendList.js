import React from 'react';


const FriendList = (props) => {
    return(
        <div className="friends-list">
        <h1>Friends</h1>
            {props.friendList.map(friend => {
                // Need to find a better key value
                return(
                    <h2 key={friend.name}>{friend.name}</h2>
                );
            })}
        </div>
    );
}

export default FriendList;