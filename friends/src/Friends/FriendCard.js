import React from 'react';
import FriendInfo from './FriendInfo';

const FriendCard = (props) => {
    return (
        <div className="friend-container">
            {props.friends.map(friend => {
                return <FriendInfo 
                        key={friend.id}
                        id={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                        deleteHandler={props.deleteHandler}
                       />
            })}
        </div>
    )
}

export default FriendCard;