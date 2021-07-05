import React from 'react'
import '../App.css'
import FriendList from './friendList'

export default class Friends extends React.Component {
  render() {
    return (
      <div>
        <FriendList data={this.props.data} deleteFriend={this.props.deleteFriend} />
      </div>

    )
  }
}



