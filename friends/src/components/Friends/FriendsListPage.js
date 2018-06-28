import React from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList';

const FriendsListPage = props => {
  return(
    <div id="friendsListPage">
      <h1>Friends</h1>
      <Link to="/add">
        <button>Add Friend</button>
      </Link>
      <FriendsList friends={props.friends} onDeleteFriend={props.onDeleteFriend} /> 
    </div>
  )
}

export default FriendsListPage;
