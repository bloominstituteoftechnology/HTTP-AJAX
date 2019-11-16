import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';



const FriendsDisplay = props => {
    return (
        <div>
            {props.nuts.map(friend => {
                return (
                    // <Link to={`/friends/${friend.id}`}>
                    <Friend key={friend.id} friend={friend} handleSetData={props.handleSetData} />
                    
                    
                
            )})}
        </div>
        
    );
};
 
export default FriendsDisplay