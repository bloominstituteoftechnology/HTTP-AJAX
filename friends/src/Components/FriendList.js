import React from 'react';
import {Link} from 'react-router-dom';

export default class FriendList extends React.Component {
  render() {
    return (
      <>
        {this.props.friends.map(friend => (
          <div key={friend.id}>
            <div onClick={() => this.props.deleteFriend(friend)}> X </div>
            <Link to={`/friends/${friend.id}`}>
              <h1>{friend.name}</h1>
              <div>{`Age: ${friend.age}`}</div>
              <div>{`Email: ${friend.email}`}</div>
            </Link>
          </div>
        ))}
      </>
    );
  }
}
