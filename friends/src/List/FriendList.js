import React from "react";




const FriendList = props => {
  return (

      <div>
            {props.friendsData.map(friend => <h1>{friend.name}</h1>)}
      </div>
  );
}	

export default FriendList;	
