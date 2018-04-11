import React, { Component } from "react"
import Friend from "../Friend"
export default class FriendsList extends Component {
  render() {
    const { friends } = this.props
    return (
      <div className="List">
        {friends.map(person => <Friend {...person} key={person.id} />)}
      </div>
    )
  }
}
