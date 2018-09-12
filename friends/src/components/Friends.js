import React from 'react';

const Friends = props => {
    console.log(props);
    return (
        <div>
            {props.friends.map(friend => 
            <div>
                <h1>{friend.name}</h1>
                <h3>{friend.age}</h3>
                <h3>{friend.email}</h3>
            </div>)}
        </div>
    );
}

export default Friends;