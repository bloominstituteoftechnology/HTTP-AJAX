import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = props => {
  return (

    <div className="friend-card">
      <h3 className="friend-name">Name: {props.name}</h3>
      <div>Age: {props.age}</div>
      <div>Email: {props.email}</div>
      <button onClick={event => {
        props.deleteFriend(event, props.id)
        // history.push('/')
        }}>Delete Friend</button>
        <Link onClick={props.onEditSelect} to={`/friends/edit/${props.id}`} >
          <div>Edit Friend</div>
        </Link>
        
    </div>
  )
}

export default FriendCard;