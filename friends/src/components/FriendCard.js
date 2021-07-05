import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = props => {

  return (

    <div className="friend-card">
      
      <div className="friend-card-top">
        <div className="friend-card-img">
          <img src={props.img} alt=""/>
        </div>
        <div className="friend-card-text">
          <h3 className="friend-name">Name: {props.name}</h3>
          <div>Age: {props.age}</div>
          <div>Email: {props.email}</div>
        </div>
      </div>
      <div className="friend-card-bottom">

        {/* <button onClick={event => {
          props.deleteFriend(event, props.id)
          }}>Delete Friend</button> */}

          <div className="friend-card-icon" onClick={event => {
            props.deleteFriend(event, props.id)
          }}>
            <img src="images/trash-2.svg" alt="delete icon" />
          </div>
        <Link to={`/friends/edit/${props.id}`} >
          <div className="friend-card-icon">
            <img src="images/edit.svg" alt="edit icon" />
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default FriendCard;