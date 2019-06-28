import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';
import {Link} from 'react-router-dom';
//<Route path={`/friend/${f.id}`}
//render={props => <Friend {...props}key={f.id} friend={f} updateFriend={props.updateFriend} />}
///>

        //<Link key={f.id} to={`/friend/${f.id}`}>
          //<Friend friend={f} updateFriend={props.updateFriend} />
        //</Link>
const FriendsList = props => {
  return (
    <div>
      <h1>My {props.friends.length} Friends</h1>
      {props.friends.map(f => (
        <Friend friend={f} updateFriend={props.updateFriend} deleteFriend={props.deleteFriend}/*onClick={() => props.history.push(`/friend/${f.id}`)}*//>
      ))}
      <FriendForm addFriend={props.addFriend} />
    </div>
  );
};

export default FriendsList;
