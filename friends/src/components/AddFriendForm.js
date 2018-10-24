import React from 'react'

const AddFriendForm = (props) => {
  return (
    <div>
      <h1>Add Friend:</h1>
      <form>
        Name: <input 
                value={props.friend.name} 
                type='text'
                placeholder="name"
                onChange={props.addFriendHandler} />
        <br></br>
        Age: <input 
                value={props.friend.age}
                type='text'
                placeholder="age"
                onChange={props.addFriendHandler}  />
        <br></br>
        Email: <input 
                value={props.friend.email}
                type='text'
                placeholder="email"
                onChange={props.addFriendHandler}  />
        <br></br>
        <button onClick={props.submitFriendHandler}>Submit</button>
      </form>    
    </div>

  )
}


export default AddFriendForm;