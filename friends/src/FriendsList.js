import React from 'react';

function FriendsList(props) {
    return (
        <div className='friends-list'>
            {props.friends.map( friend => (
                <div 
                    className='friend-card'
                    key={friend.id} >
                    <div className='friends-name'>First name: {friend.name}</div>
                    <p>{friend.age} years old</p>
                    <p>Email {friend.email}</p>
                    
                </div>    
            ))}
        
        </div>
    );
}

export default FriendsList;

