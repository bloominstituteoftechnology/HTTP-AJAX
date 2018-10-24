import React from 'react'

const AddFriendForm = (props) => {
  return (
    <div>
      <h1>Add Friend:</h1>
      <form>
        Name: <input 
                value={props.friend.name} 
                type='text'
                name="friendName"
                placeholder="enter name"
                onChange={props.addFriendHandler} />
        <br></br>
        Age: <input 
                value={props.friend.age}
                type='text'
                name="friendAge"
                placeholder="enter age"
                onChange={props.addFriendHandler}  />
        <br></br>
        Email: <input 
                value={props.friend.email}
                type='text'
                name="friendEmail"
                placeholder="enter email"
                onChange={props.addFriendHandler}  />
        <br></br>
        <button type="submit" onClick={props.submitFriendHandler}>Submit</button>
      </form>    
    </div>

  )
}


export default AddFriendForm;