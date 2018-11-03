import React from 'react';
import Friend from './Friend';

export default props => {
    return(
        <div className="friend-list">
            {props.friends.map(friend => {
                return(
                    <Friend 
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    />
                )
            })}
        </div>
    )
}
