import React from 'react'

function UpdateFriend(props) {
  
    return (
      <div>
        <form onSubmit={props.updateHandler} className="UpdateFriendForm">
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
          <button type="submit">Refresh</button>
        </form>
      </div>
    )
  
}
  export default UpdateFriend;