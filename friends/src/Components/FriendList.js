import React from "react";
// import ReactDOM from "react-dom";
// import {Route, Link} from 'react-router-dom';

const FriendList = props => {
    const friends = props.friends;
   const friendArray = friends.map( (friend) => 
  <ul><b>{friend.name}</b> {friend.age} {friend.email}</ul>
  );
      return(
            <div>
                {friendArray}
            </div>
      );
}

export default FriendList;