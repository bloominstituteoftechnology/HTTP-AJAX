import React from "react";
import EditFriend from "./EditFriend";



const FriendList = props => {
  return (

      <div>
            {props.friendsData.map(friend => {
		    return(
	    
		    <div className="list-container" key={friend.id}>		   
		     <div className="form-div"> 
		    <p>{friend.name} {friend.age} {friend.email}</p>
		    <button className="delete-btn" onClick={()=>props.deleteFriend(friend.id)}>Delete</button> 			</div>
		
		   <div>		    
	           <EditFriend editFriend={props.editFriend}  friend={friend} />
		   </div>
		   </div>	    
		    ); 
	    })}
      </div>
  );
}	

export default FriendList;	
