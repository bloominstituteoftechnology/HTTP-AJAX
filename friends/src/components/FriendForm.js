import React from 'react'

function FriendForm (props) {
    
  return (
    <div className="form-container">
        <h2>Add New Friend</h2>
    <form onSubmit={handleSubmit}>
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
            name="name"
            value={props.friend.name}
            placeholder="Name"
            onChange={props.handleChanges}
        />
        <div className="baseline" />

    </form>
      
    </div>
  )
}

export default FriendForm
