import React from 'react';
import { Link } from 'react-router-dom';
import FriendsList from './FriendsList';

const FriendsListPage = props => {
  return(
    <div id="friendsListPage">
      <Link to="/add">
        <button>Add Friend</button>
      </Link>
      <FriendsList friends={props.friends} /> 
    </div>
  )
}

export default FriendsListPage;
