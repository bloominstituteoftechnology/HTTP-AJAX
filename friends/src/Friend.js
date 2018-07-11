import React from 'react';

const Friend = props => {
    return (
        <div className='friend'>
            <div>{props.friend.name}</div>
        </div>
    );
}
 
export default Friend;