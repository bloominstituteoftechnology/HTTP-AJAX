import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = props => {
  return (

    <div className="friend-card">
      <div className="friend-card-text">
        <h3 className="friend-name">Name: {props.name}</h3>
        <div>Age: {props.age}</div>
        <div>Email: {props.email}</div>
      </div>
      <button onClick={event => {
        props.deleteFriend(event, props.id)
        // history.push('/')
        }}>Delete Friend</button>
        <Link to={`/friends/edit/${props.id}`} >
          <button>Edit Friend</button>
        </Link>
        
    </div>
  )
}

export default FriendCard;