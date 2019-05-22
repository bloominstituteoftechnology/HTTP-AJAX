import React from 'react';

const Friend = (props) => {
    return (
        <div className={`friend ${props.friend.name}-${props.friend.id}`}>
        <h3 className='friendname'>{props.friend.name}</h3>
        <p className='friendage'>Age:{props.friend.age}</p>
        <p className='friendemail'>Email:{props.friend.email}</p>
        </div>
    )
}

export default Friend