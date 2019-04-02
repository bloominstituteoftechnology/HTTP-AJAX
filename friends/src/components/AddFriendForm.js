import React from 'react';

const AddFriendForm = props => {
    return(
        <form className="add-friend">
            <h4>Add a friend</h4>
            <div className='input-field'>
              <label for='name'>Name</label>
              <input id='name' />
            </div>
            <div className='input-field'>
              <label for='age'>Age</label>
              <input id='age' />
            </div>
            <div className='input-field'>
              <label for='email'>Email</label>
              <input id='email' />
            </div>
            <button type='submit'>Add Friend</button>
        </form>
    )
}

export default AddFriendForm;