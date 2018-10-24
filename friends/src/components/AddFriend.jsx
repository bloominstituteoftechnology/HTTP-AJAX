import React from 'react';
import './AddFriend.css';

const AddFriend = props => {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
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
          <button type='submit'>Add Friend</button>
        </form>
      </div>
    )
  }

export default AddFriend;