import React, { Component } from "react"
export default class FriendsList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { friends } = this.props
    return <div>{friends.map(person => <p>{person.name}</p>)}</div>
  }
}
