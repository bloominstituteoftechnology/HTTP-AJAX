import React from 'react';
import './AddFriend.css';

const AddFriend = props => {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label>
            Name:
            <input type="text" name='name' onChange={props.handleChange}/>
          </label>
          <label>
            Age:
            <input type="text" name='age' onChange={props.handleChange}/>
          </label>
          <label>
            Email:
            <input type="text" name='email' onChange={props.handleChange}/>
          </label>
          <button type='submit'>Add Friend</button>
        </form>
      </div>
    )
  }

export default AddFriend;