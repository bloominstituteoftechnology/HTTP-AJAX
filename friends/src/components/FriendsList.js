import React from 'react';

import Friend from './Friend';

function FriendsList(props) {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="What's your friend's name?"
          name="name"
          onChange={props.changeHandler}
          value={props.name}
        />
        <input
          type="number"
          placeholder="How old is your friend?"
          name="age"
          onChange={props.changeHandler}
          value={props.age}
        />
        <input
          type="text"
          placeholder="What's your friend's email address?"
          name="email"
          onChange={props.changeHandler}
          value={props.email}
        />
        <button type="submit" onClick={props.addFriend}>
          Add Friend!
        </button>
      </form>
      {props.friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          deleteFriend={props.deleteFriend}
        />
      ))}
    </div>
  );
}

export default FriendsList;
