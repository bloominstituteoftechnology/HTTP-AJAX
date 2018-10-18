import React from "react";

const Friends = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div>
            <h2>{friend.name}</h2>
            <h3>{friend.age}</h3>
            <h3>{friend.email}</h3>
            <button
              onClick={ev => {
                props.deleteFriend(ev, friend.id);
              }}
            >
              Delete Friend
            </button>
            <form onSubmit={ev => props.updateFriend(ev, friend.id)}>
              <input onChange={props.changeHandler} name="name" type="input" placeholder="name" />
              <input onChange={props.changeHandler} name="age" type="input" placeholder="age" />
              <input onChange={props.changeHandler} name="email" type="input" placeholder="email" />
              <button type="submit">Update Friend</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
