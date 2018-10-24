import React from 'react';

const Friend = (props) => {
    return(
        <div>
            <p>{props.friend.name}</p>
            <p>- {props.friend.age}</p>
        </div>
    )
}

export default Friend;