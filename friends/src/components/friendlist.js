import React from 'react';

const Friendlist = props => {
  return(
  <div className= "friendlist">
      {props.friends.map(friend =>(
        <div className = "individual" key= {friend.id}>
            <p>{friend.name}  is {friend.age} years old and can be reached at {friend.email}</p>
        </div>
      ))}
  </div>
);
}

export default Friendlist;
