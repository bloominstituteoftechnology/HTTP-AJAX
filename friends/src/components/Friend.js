import React from 'react';

const Friend = ({friend, updateFriend, deleteFriend}) => {
    return (
        <div>
            <span>{friend.name}</span>
            <span>{friend.age}</span>
            <span>{friend.email}</span>
            <span><button  onClick={() => updateFriend(friend)}>update</button></span>
            <span><button onClick={() => deleteFriend(friend.id)}>delete</button></span>
        </div>
    );
}

export default Friend;
