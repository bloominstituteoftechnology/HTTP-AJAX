import React from 'react';

function Friends(props) {
    return (
        <div className='friends-list'>
            <ul>
                {props.friends.map(friend => (
                    <li key={friend.id}>
                        {friend.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Friends;