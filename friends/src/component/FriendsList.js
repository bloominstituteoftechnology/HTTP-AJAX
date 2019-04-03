import React from 'react';
import axios from 'axios';

const FriendsList = (props) => {

    axios
        .get('http://localhost:5000/friends')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    return ( 
        <div className='friend-card'>
            <p>{props.friend.name}</p>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
     );
}
 
export default FriendsList;