import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const FriendsList = props => {
  const friendsList = props.friends.slice().reverse();
  console.log('Poop');
  return (
    <div className="friends">
      {friendsList.map(friend => {
        return (
          <Link to={`/friends/${friend.id}`}>
            <div className="friend-card">{friend.name}</div>
          </Link>
        )
      })}
    </div>
  );
}

export default FriendsList;
