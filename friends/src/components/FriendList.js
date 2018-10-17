import React from 'react';


const FriendList = (props) => {
    return(
        <div className="friends-list">
        <h1>Friends</h1>
            {props.friendList.map(friend => {
                return(
                    <h2>{friend.name}</h2>
                );
            })}
        </div>
    );
}

export default FriendList;