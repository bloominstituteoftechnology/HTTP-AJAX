import React, { Component } from 'react'

export default class FriendList extends Component {
  render() {
    return (
      <div className='friends'>
        <ol>
          <h1>Friends List </h1>
          {this.props.data.map((friend) => {
            return (
              <div key={friend.id}>
                <li> <span>Name: {friend.name} , Age: {friend.age}, Email: {friend.email} </span> </li>

              </div>
            )

          })}
        </ol>

      </div>
    )
  }
}
