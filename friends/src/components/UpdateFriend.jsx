import React from 'react';

const UpdateFriend = props => {
  return(
    <div>
        <form onSubmit={props.handleUpdateSubmit}>
          <label>
            <span>ID:</span>
            <input type="text" name='id' onChange={props.handleUpdateChange}/>
          </label>
          <label>
            <span>Name:</span>
            <input type="text" name='name' onChange={props.handleChange}/>
          </label>
          <label>
            <span>Age:</span>
            <input type="text" name='age' onChange={props.handleChange}/>
          </label>
          <label>
            <span>Email:</span>
            <input type="text" name='email' onChange={props.handleChange}/>
          </label>
          <button type='submit'>Update Friend</button>
        </form>
    </div>
  )
}

export default UpdateFriend;