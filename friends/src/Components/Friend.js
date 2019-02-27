import React from 'react';

const Friend = ({friend})=>{return(
    <div>
        <p>{friend.id}</p>
        <h1>{friend.name} ({friend.age})</h1>
        <p>
            <a href="/">{friend.email}</a>
        </p>
    </div>
)};
export default Friend;