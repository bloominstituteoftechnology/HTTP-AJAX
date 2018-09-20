import React from 'react';
import Friend from './Friend';


const FriendsList = props => {
    return (
        <React.Fragment>
        {props.friends.map(friend => 
            
          ( <Friend key={friend.id} friend={friend} />)
          
        )}
        
        </React.Fragment>
    );
}

export default FriendsList;