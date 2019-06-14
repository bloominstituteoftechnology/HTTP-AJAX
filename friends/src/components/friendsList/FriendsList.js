import React from 'react';
import './friends.css'

const FriendsList = (props) => {
    return ( 
        <div>
            {props.friends.map(friend =>(<div key = {friend.id}>
            <h3>{friend.name}</h3>
            <ul className='friendsInfo'>
                <li >
                    {friend.age}
                </li>
                <li >
                    {friend.email}
                </li>
            </ul>
            </div>))}
        </div>
     );
}
 
export default FriendsList;