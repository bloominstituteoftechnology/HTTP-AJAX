import React from 'react'
import '../App.css'
import FriendForm from './friendForm';
import FriendList from './friendList'

export default class Friends extends React.Component {
  render() {
    return (
      <div className='container'>
        <FriendList data={this.props.data} />
        <FriendForm />
      </div>

    )
  }
}



