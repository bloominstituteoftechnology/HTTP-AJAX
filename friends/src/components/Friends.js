import React from "react";
import { Link } from "react-router-dom";

const Friends = props => {
  return (
    <React.Fragment>
      {props.friends.map(friend => {
        return (
          <Link to={`/${friend.id}`} key={friend.id}>
            <div className="friends" key={friend.id}>
              <h1>{friend.name}</h1>
              <h1>{friend.age}</h1>
              <h1>{friend.email}</h1>
            </div>
          </Link>
        );
      })}
      <form onSubmit={props.addFriend}>
        <input
          type="text"
          value={props.newFriend.name}
          name="name"
          onChange={props.handleChange}
        />
        <input
          type="age"
          value={props.newFriend.age}
          name="age"
          onChange={props.handleChange}
        />
        <input
          type="email"
          value={props.newFriend.email}
          name="email"
          onChange={props.handleChange}
        />
        <input type="submit" onSubmit={props.addFriend} />
      </form>
    </React.Fragment>
  );
};

export default Friends;
