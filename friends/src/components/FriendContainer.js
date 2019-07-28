import React from "react";
import { Link } from "react-router-dom";

class FriendContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="subheader">
          <h2>Look at all the friends you've made!</h2>
          <Link to="/AddFriend">
            <button>Made another friend? Click here!</button>
          </Link>
        </div>
        <div className="friend-container-wrapper">
          {this.props.friends.map(friend => (
            <div className="friend-container" key={friend.id}>
              <div
                className="delete-button"
                onClick={event => this.deleteFriend(event, friend.id)}
              >
                X
              </div>
              <h3 className="friend-name">{friend.name}</h3>
              <p className="friend-age">{friend.age}</p>
              <p className="friend-email">{friend.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FriendContainer;
