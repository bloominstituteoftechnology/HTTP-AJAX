import React from 'react';

const FriendCard = props => {
    return(
        <div className='individual-friend'>
            <p className='friend-name'>{props.data.name}</p>
            <p className='friend-age'>{props.data.age}</p>
            <p className='friend-email'>{props.data.email}</p>
        </div>
    );
}

export default FriendCard;