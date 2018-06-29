import React from 'react';
import {Link} from 'react-router-dom';  

const Friend = props => {

	return (
	
                 <div className="form-div">
		<div>
		 <Link to={`/friends/${props.friend.id}`}  className="friend-link" >
                   <p>{props.friend.name} <br /> {props.friend.age} <br /> {props.friend.email}</p>
		</Link>
		</div>
                   <button className="delete-btn" onClick={()=>props.deleteFriend(props.friend.id)}>Delete</button>                  
		  
		  </div>
     
);
}


export default Friend;	
