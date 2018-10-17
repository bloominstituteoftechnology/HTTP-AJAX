import React from 'react';

function FriendList(props) {
    // iterate through received data here
    console.log('props.friendArr', props.friendArr);
    return (
        <div className='friendContainer'> 
            {props.friendArr.map(friend => (
                <div>
                    <h1>{`${friend.name}`}</h1>
                    <h2>{`${friend.age}`}</h2>
                    <h3>{`${friend.email}`}</h3>
                </div>
            ))}
        </div>
    )
}

export default FriendList;