import React from 'react'
import '../App.css'

export default class FriendForm extends React.Component {
  render() {
    return (
      <div className='friendsForm'>

        <form className='form'>
          <h2>Add Friend</h2>
          <input placeholder='Name' />
          <input placeholder='Age' />
          <input placeholder='Email' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
