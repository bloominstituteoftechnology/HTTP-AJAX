import React from 'react';


function FriendList(props) {

  let deleteFriend = (e) => { 
    props.removeFriend(props.obj.id);
  }

  return( 
    <div> 
      {props.obj.map(friend => {
    return( 
      <div className="friend-list">
        <div className='friend-name'>{friend.name}</div>
        <div className='friend-age'>{`Age: ${friend.age}`}</div>
        <div className='friend-email'>{`Email: ${friend.email}`}</div>
        <button onClick={deleteFriend}>Delete</button>
        </div>
      );
    })}
    </div>

    );
    
}
export default FriendList;



