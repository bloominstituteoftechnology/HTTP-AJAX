import React from "react";




const FriendList = props => {
  return (

      <div>
            {props.friendsData.map(friend => <p key={friend.id}>{friend.name} {friend.age} {friend.email}</p>)}
      </div>
  );
}	

export default FriendList;	
