import React from 'react';

import Friend from './friend'

export default class ListFriends extends React.Component {

  render() {
  return (
    <div>
      {this.props.friends.map(friend => {
        return(
          <div key={friend.id}>
            <Friend friend={friend} deleteFriend={this.props.deleteFriend} edit={this.props.edit}/>
          </div>
        )
      })}
    </div>
    )
  }
}

//todo -->  if edit = true, then show a form with name, age and email, and button