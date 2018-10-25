import React from "react";

//returns friend data
const Friends = props => {
   return (
      <>
         {props.friend.id}. {props.friend.name} {props.friend.age} {props.friend.email}
         <button onClick={() => props.delete(props.friend.id)}>Delete Friend</button>
      </>
   )
}

export default Friends