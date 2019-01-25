import React from 'react';

const FriendsList = (props) => {
    return ( 
        <div>
            {props.friends.map(friend =>(<div key = {friend.id}>
            <h3>{friend.name}</h3>
            <ul>
                <li>
                    {friend.age}
                </li>
                <li>
                    {friend.email}
                </li>
            </ul>
            </div>))}
        </div>
     );
}
 
export default FriendsList;