import React from "react";
import { Link } from 'react-router-dom';

// import Friend from "./Friend";

export default class FriendList extends React.Component {
  // delete = () => {
  //   this.props.deleteFriend(this.props.friend);
  // };
  render() {
    return (
      <>
        {this.props.friends.map(friend => (
          /* <Friend
            key={friend.id}
            friend={friend}
            friends={this.props.friends}
            updateFriend={this.props.updateFriend}
            deleteFriend={this.props.deleteFriend}
          /> */
          <div style={{padding: '20px 0 40px 0'}} key={friend.id}>
              <div onClick={() => this.props.deleteFriend(friend)} style={{cursor: 'pointer'}}>X</div>
              <Link to={`/friends/${friend.id}`} style={{textDecoration: 'none', color: 'black'}}>
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
