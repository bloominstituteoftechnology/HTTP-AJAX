import React from 'react';


const FriendList = (props) => {
    return(
        <div className="friends-list">
        <h1>Friends</h1>
            {props.friendList.map(friend => {
                // Need to find a better key value
                return(
                    <div className="card">
                        <h2 key={friend.id}>{friend.name}</h2>
                        <p>{friend.age}</p>
                        <a>{friend.email}</a>
                        <button onClick={(e)=>props.deleteFriend(e,friend.id)}>Delete</button>
                        <button>Update</button>
                    </div>
                );
            })}
        </div>
    );
}

export default FriendList;