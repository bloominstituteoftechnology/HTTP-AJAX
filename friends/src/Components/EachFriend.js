import React from 'react';


const EachFriend = (props) =>{
console.log(props)
  return(
<div className="eachFriend">
  <h4>{props.friend.name}</h4>
<p>{props.friend.age}</p>
<p>{props.friend.email}</p>
</div>
)
}
export default EachFriend
