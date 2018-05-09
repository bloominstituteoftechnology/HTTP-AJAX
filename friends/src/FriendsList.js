import React from 'react';
import Friends from './Friends';

const FriendsList = props => {
    return (
        <div className="main-div">
            {props.results.map(friends => {
                return <Friends key={friends.id} friends={friends} />;
            })}        
        </div>
    )
}

export default FriendsList;