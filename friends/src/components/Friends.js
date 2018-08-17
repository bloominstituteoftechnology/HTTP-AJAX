import React from 'react';


const Friends = props => {



    console.log("Friends", props)
    console.log('eachFriend log', props.deleter)
    return (
      
      <div className="eachFriend" >
      <button id={props.data.id} deleter={props.deleter}>x</button>
        <h1>{props.data.name}</h1>
        <h3>{props.data.age}</h3>
        <p>{props.data.email}</p>
      </div>
    )
  }




  
  export default Friends;