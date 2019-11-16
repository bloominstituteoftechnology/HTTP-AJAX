import React from 'react';

const NewFriendForm = props => {
    return (
        <form>
          <input 
            placeholder="Add Name..."
            type="text"
            onChange={props.handleNameChange}
            name="name"
            valueone={props.valueone} 
          />
          <input 
            placeholder="Add Age..."
            type="number"
            onChange={props.handleNameChange}
            name="age"
            valuetwo={props.valuetwo} 
          />
          <input 
            placeholder="Add Email..."
            type="text"
            onChange={props.handleNameChange}
            name="email"
            valuethree={props.valuethree} 
          />
          <button onClick={props.handleSubmitFriend} >Add Friend</button>
     
        </form>
    )
}

export default NewFriendForm;