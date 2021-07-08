import React from 'react';
import './FriendsListDiplay.css';
import {Link} from 'react-router-dom';
const FriendsListDisplay = (props) => {
  return (
    <div className='friendsContainer'>
      <h1>Friends List: </h1>
      {props.friends.map((friend,i) => (
        <Link to={`/${friend.id}`} key={friend + i} className='friendContainer'>
          <h2 className='header'>{friend.name}</h2>
          <p><span className='field'>Age:</span>{friend.age}</p>
          <p><span className='field'>Email:</span> {friend.email}</p>
        </Link>
      ))}
    </div>
  );
}
export default FriendsListDisplay;
