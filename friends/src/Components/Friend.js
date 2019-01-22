import React from 'react';
import { Link, Route } from 'react-router-dom';
import FriendForm from './FriendForm/FriendForm';

const Friend = (props) => {
    const friend = props.friends? props.friends.find(friend=>`${friend.id}` === props.match.params.id):props.friend;
    console.log(friend)
    return ( 
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <Link to={`/friends/${friend.id}/update`}>Update</Link>
            <Route exact path="/friends/:id/update" render={props=> <FriendForm {...props} /> } />
        </div>
     );
}
 
export default Friend;