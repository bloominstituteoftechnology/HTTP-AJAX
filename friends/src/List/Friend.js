import React from 'react';
  
const Friend = props => {

	return (
	
                 <div className="form-div">

                   <p>{props.friend.name} <br /> {props.friend.age} <br /> {props.friend.email}</p>
                   <button className="delete-btn" onClick={()=>props.deleteFriend(props.friend.id)}>Delete</button>                  
		  
		  </div>
     
);
}


export default Friend;	
