//friendsList
import React from 'react';

const Friends = props =>{
  return(
    <div className="friendList">
      <span>{props.friends.map(
        item =>
        <div>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span>{item.email}</span>
        </div>
      )}</span>
    </div>
  );
}

export default Friends;
