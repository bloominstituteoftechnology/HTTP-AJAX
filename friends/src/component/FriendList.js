import React from 'react';


function FriendList(props) {
  return( 
    <div> 
      {props.obj.map(friend=> {
    return( 
      <div className="friend-list" key={friend.id}>
        <div className='friend-name'>{friend.name}</div>
        <div className='friend-age'>{`Age: ${friend.age}`}</div>
        <div className='friend-email'>{`Email: ${friend.email}`}</div>
        <button onClick={(e) => { 

          props.removeFriend(friend.id);
          console.log(friend.id);
          }}>Delete</button>
        </div>
      );
    })}
    </div>

    );
    
}
export default FriendList;



