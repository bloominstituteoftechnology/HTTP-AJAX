import React from 'react';

const Friend = (props) => {
    const {friend}= props;
    return ( 
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
     );
}
 
export default Friend;