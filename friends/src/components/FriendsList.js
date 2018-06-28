import React from 'react';
import '../App.css';
import Friend from './Friend';

const FriendsList = props => {
  return (
    <div className="friendList">
      {props.friends.map(friend => {
        return <Friend key={friend.id} friend={friend} name={friend.name}
        age={friend.age} email={friend.email} handleChange={props.handleChange}
        setData={props.setData} />
      })}
    </div>
  )
}

export default FriendsList;
