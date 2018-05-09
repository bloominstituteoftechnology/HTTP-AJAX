import React from 'react';
import './FriendsListStyle.css';

const FriendsList = props => {

    return ( 
        <div className='container'>
            {props.friends.map((friend) => {
                return (
                    <div className='friendCard'>
                        <div className='name'>{friend.name}</div>
                        <div className='age'>Age: {friend.age}</div>
                        <div className='email'>Contact: {friend.email}</div>
                    </div>
                );
            })}
        </div>
    );
}


export default FriendsList;