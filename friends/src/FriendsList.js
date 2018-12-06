import React from 'react';

function FriendsList(props) {
    return (
        <div className='friends-list'>
            {props.friends.map( friend => (
                <div 
                    className='friend-card'
                    key={friend.id} >
                    <div className='friends-name'>First name: {friend.name}</div>
                    <div className='age'>{friend.age} years old</div>
                    <div className='email'>Email {friend.email}</div>
                    
                </div>    
            ))}
        
        </div>
    );
}

export default FriendsList;

