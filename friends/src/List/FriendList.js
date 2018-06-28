import React from "react";




const FriendList = props => {
  return (

      <div>
            {props.friendsData.map(friend => {
		    return(	
		    <div className="list-container" key={friend.id}>		    
		    <p>{friend.name} {friend.age} {friend.email}</p>
		    <button className="delete-btn" onClick={()=>props.deleteFriend(friend.id)}>Delete</button>
		    </div>		    
		    ); 
	    })}
      </div>
  );
}	

export default FriendList;	
