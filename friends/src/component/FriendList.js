import React from 'react';

function FriendList(props) {
  return( 
    <div className="friends-list"> 
      {props.obj.map(friend => {
    return( 
        <div>
           <div>{friend.name}</div>
            <div>{friend.age}</div>
            <div>{friend.email}</div>
            </div>
      )
    })}
    </div>

    );
  
    
}
export default FriendList;



