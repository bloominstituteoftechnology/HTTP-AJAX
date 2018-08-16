import React from 'react';

const Friends = props => {
    console.log(props)
    return (
      <div className="eachFriend" id={props.data.id}>
        <h1>{props.data.name}</h1>
        <h3>{props.data.age}</h3>
      </div>
    )
  }




  
  export default Friends;