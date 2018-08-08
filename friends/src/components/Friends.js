import React from 'react';

const Friends = props => {
    return (
        <div>
            {props.friends.map(friend => {
                <div>
                    <p>
                        <a href={`mailto: ${friend.email}`}>{friend.name}</a> 
                        is {friend.age} years old
                    </p>
                </div>
            })}
        </div>
    )
}

export default Friends;