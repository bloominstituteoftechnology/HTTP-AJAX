import React from 'react'

function FriendForm(props) {
  return (
    <div>
      <form className="NewFriendForm">
        <input
            value={props.inputName}
            name="name"
            onChange={props.handleInput}
            placeholder="Name" />
        <input 
            value={props.inputAge} 
            name="age"
            onChange={props.handleInput}
            placeholder="Age" />
        <input 
            value={props.inputEmail}
            name="email" 
            onChange={props.handleInput}
            placeholder="Email" />
        <button onClick={props.addFriend}>Add Friend</button>
      </form>
    </div>
  )
}

export default FriendForm;