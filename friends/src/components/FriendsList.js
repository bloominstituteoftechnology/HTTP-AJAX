import React from 'react';
import Friend from './Friend';
import FriendForm from './FriendForm';
import {Route, Link} from 'react-router-dom';
//<Route path={`/friend/${f.id}`}
//render={props => <Friend {...props}key={f.id} friend={f} updateFriend={props.updateFriend} />}
///>

const FriendsList = props => {
  return (
    <div>
      <h1>My {props.friends.length} Friends</h1>
      {props.friends.map(f => (
        <Link to={`/friend/${f.id}`}>
          <Friend key={f.id} friend={f} updateFriend={props.updateFriend} />
        </Link>
      ))}
      <FriendForm addFriend={props.addFriend} />
    </div>
  );
};

export default FriendsList;
