import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    const handleDelete = id => {
        props.handleDelete(id);
      };
    return (
        <div>
            {props.friends.map(friend => {
                return(
                    <Friend key={friend.id}
                    friend={friend}/> 
                // <div key={friend.id}>
                // {friend.name} {friend.age} {friend.email}
                // <button onClick={() => handleDelete(friend.id)}>Delete</button>
                // </div>
                );
            })}
            </div>
    );
};

export default FriendsList;