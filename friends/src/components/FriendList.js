import React from 'react';


const FriendList = (props) => {
    return(
        <div className="friends-list">
        <h1>Friends</h1>
            {props.friendList.map(friend => {
                // Need to find a better key value
                return(
                    <div className="card">
                        <h2 key={friend.name}>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <a>{friend.email}</a>
                    </div>
                );
            })}
        </div>
    );
}

export default FriendList;