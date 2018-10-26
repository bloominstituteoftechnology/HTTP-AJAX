import React, { Component } from 'react'

export default class FriendList extends Component {
  render() {
    return (
      <div className='friendsList'>
        <h1>Friends List </h1>
        {this.props.data.map((friend) => <p key={friend.id}> <span> Id:{friend.id},  Name: {friend.name} , Age: {friend.age}, Email: {friend.email} </span> <button onClick={this.props.deleteFriend(friend.id)}>Remove Friend</button></p>)}
      </div>
    )
  }
}
