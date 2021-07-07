import React from 'react'

function FriendForm(props) {
  return (
    <div>
      <form className="NewFriendForm">
        <input
            value={props.inputName}
            name="name"
            onChange={props.inputHandler}
            placeholder="Name" />
        <input 
            value={props.inputAge} 
            name="age"
            onChange={props.inputHandler}
            placeholder="Age" />
        <input 
            value={props.inputEmail}
            name="email" 
            onChange={props.inputHandler}
            placeholder="Email" />
        <button onClick={props.addFriend}>Add Friend</button>
      </form>
    </div>
  )
}

export default FriendForm;