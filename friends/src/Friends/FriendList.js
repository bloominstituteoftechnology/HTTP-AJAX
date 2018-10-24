import React from 'react';
import FriendInfo from './FriendInfo';

const FriendList = (props) => {
    return (
        <div className="friend-container">
            {props.friends.map(friend => {
                return <FriendInfo 
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.age}
                       />
            })}
        </div>
    )
}

export default FriendList;