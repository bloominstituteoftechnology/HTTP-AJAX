import React from "react";
import { Link } from "react-router-dom";
import Friend from './Friend';

export default class FriendsList extends React.Component {
  
  handleUpdate = friend => {
    
    this.props.updateFriend(friend)
  }
  

  render() {
  if (this.props.loading) {
    return <h2>Loading data..</h2>;
  } else if (!this.props.loading && this.props.friends.length === 0) {
    return <h2>No data here, try again</h2>;
  }

  return (
    <div>
      {this.props.friends.map((friend, i) => (
        <div key={i}>
          <Friend friend={friend} updateFriend={(friend) => this.props.updateFriend(friend)} deleteFriend={(id) => this.props.deleteFriend(id)}/>
        </div>
      ))}
      <Link to="/add">
        <button>Add Friend?</button>
      </Link>
    </div>
  );
}
}
