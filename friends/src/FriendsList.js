import React from 'react';

function FriendsList(props) {
    return (
        <div className='friends-list'>
            {props.friends.map( friend => (
                <div 
                    className='friend-card'
                    key={friend.id} >
                    
                    <P>{friend.name}</P>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>    
            ))}
        
        </div>
    );
}

export default FriendsList;