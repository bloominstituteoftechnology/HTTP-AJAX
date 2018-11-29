import React from 'react';
import axios from 'axios';

const Friend = props => {

    return (
        
        <div className="friends-list">
            {props.friends.map(
                friend => ( 
                    <div className="friend-card" key={friend.id}>
                        <h4>{friend.name}</h4>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div> 
                ) 
            )}
        </div>
    )
    
    
}

export default Friend;