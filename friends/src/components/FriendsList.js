import React from 'react';



const FriendsList = props => {
    return (
        <div className='friends-wrapper'>
            {props.friends.map(friend => 
                 <div key={friend.id} className='friend-wrapper'>
                    <div className='friends'>
                         <div onClick={ () => props.history.push(`/friend/${friend.id}`)} className='friend'>
                            <h2>Name: {friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                     </div>
                 </div>
             </div>
                )}
            </div> 
      
    );
};

export default FriendsList