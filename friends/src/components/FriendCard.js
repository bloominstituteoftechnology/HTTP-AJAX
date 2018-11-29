import React from 'react';

const FriendCard = props => {
    return(
        <div className='individual-friend'>
            <i class="fas fa-user"></i>
            <p className='friend-name'>{props.data.name}, <span className='friend-age'>{props.data.age}</span></p>
            <p className='friend-email'>{props.data.email}</p>
        </div>
    );
}

export default FriendCard;