import React from 'react';

const Friends = props => {
    return (
        <div>
            <div>
                {props.friends.map(friend => {
                return <div key={friend.id}>
                    <h1>{friend.name}</h1>    
                </div>})}
            </div>
        </div>
    )
}

export default Friends;