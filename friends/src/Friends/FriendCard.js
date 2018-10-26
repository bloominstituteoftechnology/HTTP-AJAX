import React from 'react';
import FriendInfo from './FriendInfo';

const FriendCard = (props) => {
    return (
        <div className="friend-container">
        <h1>You're not alone! :)</h1>
        <h2>Friends:</h2>
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