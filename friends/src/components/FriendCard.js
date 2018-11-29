import React from 'react';

const FriendCard = props => {
    return(
        <div className='individual-friend'>
            <button className='delete-button'>X</button>
            <i className="fas fa-user"></i>
            <p className='friend-name'>{props.data.name}, <span className='friend-age'>{props.data.age}</span></p>
            <p className='friend-email'>{props.data.email}</p>
            <button 
                onClick={() => props.updateFriend(props.data.id)} 
                className='edit-button'
            >Edit</button>
        </div>
    );
}

export default FriendCard;