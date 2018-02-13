import React from 'react';
import axios from 'axios';

const DeleteFriend = (props) => {
    return (
    <button onClick={handleEvent} value={props.friend.id}>Delete</button>
    );
};

const handleEvent = (event) => {
  let target = event.target;
  let friend = 'http://localhost:5000/friends/id=' + target.value;
  console.log(friend);
  axios({
    method: 'delete',
    url: friend,
  });
  
};



export default DeleteFriend;
