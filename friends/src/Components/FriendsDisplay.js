import React from 'react';

const FriendsDisplay = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div key={friend.id}>{friend.name}</div>
                
            )})}
        </div>
        
    );
};
 
export default FriendsDisplay;