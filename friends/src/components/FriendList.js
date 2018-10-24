import React from "react";
import { Link } from 'react-router-dom';

import Friend from "./Friend";

export default class FriendList extends React.Component {
    delete = (friend) => {
      this.props.deleteFriend(friend)

  }

  render() {
    return (
      <>
        {this.props.friends.map(friend => (
          <>
            <div>
              <div onClick={() => this.delete(friend)}>X</div>
            </div>

            <Link to={`/friends/${friend.id}`}>
              <Friend
                key={friend.id}
                friend={friend}
                updateFriend={this.props.updateFriend}
                deleteFriend={this.props.deleteFriend}
              />
            </Link>
          </>
        ))}
      </>
    );
  }
}
