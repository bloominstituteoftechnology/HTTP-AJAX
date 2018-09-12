import React from 'react';

const FriendList = props => {
  if (props.list[0]) {
    const item = props.list[1]
  return (
     <div key={item.id}>
       {props.list.map(item =>(
         <ol>
     <li>{item.name}</li>
     <li>{item.age}</li>
     <li>{item.email}</li>
     </ol>
      ))
     }
   </div>
)} else {return <p> 'loading' </p>}
}

export default FriendList
