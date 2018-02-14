import React from 'react';
import './Friends.css';

const Friends = (props) => {
  return (
    <div>
      <ul className="list">
        {props.friendList.map((friend,i) => {
          return(
            <li className="list__item" key={friend.id}>
              <div className="item__top">
                <div><b>Name:</b> {friend.name}</div>
                <button onClick={()=>{props.onDelete(friend.id)}} className="item__button-delete">X</button>
              </div>
              <div><b>Age:</b> {friend.age}</div>
              <div><b>E-mail:</b> {friend.email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Friends;
