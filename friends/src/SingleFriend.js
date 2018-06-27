import React from 'react';

const SingleFriend = (props) => {
    console.log('single friend: ', props.friendItem)
    return (
        <div className='cardWrapper'>
            <p>{props.friendItem.name}</p>
            <p>{props.friendItem.age}</p>
            <p>{props.friendItem.email}</p>
            

        </div>
    )
}
 
export default SingleFriend;