import React from "react";
import { Link } from "react-router-dom";
import "./friends.scss";
import { TweenMax } from "gsap/all";

class Friends extends React.Component {
  constructor() {
    super();
    this.friends = [];
  }
  componentDidMount() {
    TweenMax.staggerFrom(this.friends, 1, { x: 2000 }, 0.2);
  }
  render() {
    const props = this.props;
    return (
      <div className="friends-container">
        {props.friends.map((friend, index) => {
          return (
            <Link to={`/${friend.id}`} key={friend.id}>
              <div
                className="friends"
                key={friend.id}
                ref={div => (this.friends[index] = div)}
              >
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
            placeholder="enter name"
          />
          <input
            type="age"
            value={props.newFriend.age}
            name="age"
            onChange={props.handleChange}
            placeholder="enter number"
          />
          <input
            type="email"
            value={props.newFriend.email}
            name="email"
            onChange={props.handleChange}
            placeholder="enter email"
          />
          <input type="submit" onSubmit={props.addFriend} />
        </form>
      </div>
    );
  }
}

export default Friends;
