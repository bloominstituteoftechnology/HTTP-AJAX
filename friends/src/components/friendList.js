import React, { Component } from 'react'

export default class FriendList extends Component {
  render() {
    return (
      <div className='friendsList'>
        <h1>Friends List </h1>
        <ol>
          {this.props.data.map((friend) => <li key={friend.id}> <span>Name: {friend.name} , Age: {friend.age}, Email: {friend.email} </span> </li>)}
        </ol>

      </div>
    )
  }
}
