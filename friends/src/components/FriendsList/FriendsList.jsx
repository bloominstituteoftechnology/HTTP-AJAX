import React, { Component } from "react"
export default class FriendsList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>{console.log(this.props)}</div>
  }
}
