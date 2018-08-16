import React from 'react';


export default friends;
    friends.map(friends => {
    return (
<div key={friends.id}>
{friends.id} {friends.name} {friends.age} {friends.email})}
</div>)
    }
