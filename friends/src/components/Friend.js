import React from 'react';

 const Friend = (props) => {
    return (
        <div className={`friend ${props.friend.name}-${props.friend.id}`}>
            <h2 className='friend-name'>{props.friend.name}</h2>
            <p className='friend-age'>age: {props.friend.age}</p>
            <p className='friend-email'>email: {props.friend.email}</p>
        </div>
    )
}

 export default Friend;