import React from "react";




const FriendList = props => {
  return (

      <div>
            {props.friendsData.map(friend => <p>{friend.name}</p>)}
      </div>
  );
}	

export default FriendList;	
