//friendsList
import React from 'react';
import {Link} from 'react-router-dom';

const Friends = props =>{
  return(
    <div className="friendList">
      <span>{props.friends.map(
        item =>
        <div>
        <div>
          <span>name: {item.name}</span>
        </div>
        <div>
          <span>age: {item.age}</span>
        </div>
        <div>
          <span>email: {item.email}</span>
        </div>
        </div>
      )}</span>
      <Link to="/login">Log In</Link>
    </div>

  );
}

export default Friends;
