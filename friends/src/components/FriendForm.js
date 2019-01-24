import React from 'react'

function FriendForm (props) {
    
  return (
    <div className="form-container">
        <h2>Add New Friend</h2>
     <form onSubmit={props.handleChanges}> 
        <input 
            type="text"
            name="name"
            value={props.friend.name}
            placeholder="Name"
            onChange={props.handleChanges}
        />
        <div className="baseline" />
        <input 
            type="number"
            name="age"
            value={props.friend.age}
            placeholder="Age"
            onChange={props.handleChanges}
        />
        <div className="baseline" />
        <input 
            type="text"
            name="email"
            value={props.friend.email}
            placeholder="Email"
            onChange={props.handleChanges}
        />
        <div className="baseline" />
        <button className="form-button"onClick={props.addFriend}>Submit</button>

    </form>
      
    </div>
  )
}

export default FriendForm
