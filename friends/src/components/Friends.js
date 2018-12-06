import React from 'react';

const Friends = props => {
    return props.friends.map(p => (
        <div className='friend-list' key={p.id}>
        <h1>Name: {p.name}</h1>
        <h3>Age: {p.age}</h3>
        <h3>Email: {p.email}</h3>
        {/* Update Button WIP */}
        <button onClick={() => props.deleteFriend(p.id)}>Delete</button>
        </div>
    ))
}

export default Friends;