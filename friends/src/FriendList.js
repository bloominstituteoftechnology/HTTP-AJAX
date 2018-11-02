import React from 'react';

const FriendList = (props) => {
    return (
        <div className="friendContainer">
            <span>{props.friend.name}</span>
			<span>{props.friend.age}</span>
			<span>{props.friend.email}</span>
            <button onClick={props.deleteFriend(props.friend.id)}>X</button>
        </div>
    )
}
export default FriendList;