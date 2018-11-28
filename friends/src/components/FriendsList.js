import React from 'react';

const FriendsList = props => {
    return (
        <div className='friends-wrapper'>
            <div className='friends'>
            {props.friends.map(friend => 
                
                <div className='friend'>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
                
                )}
            </div> 
        </div>
    );
};

export default FriendsList