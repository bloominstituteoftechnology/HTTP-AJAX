import React from 'react';

const FriendInput = props => {
    return (
      <form action="" className="add-friend-form">
        <h1>Add a Friend</h1>
        <input 
        type="text"
        onChange={props.handleTextInput}
        placeholder="Add name..."
        name="name"
        value={props.name}
        />
        <input 
        type="text"
        onChange={props.handleTextInput}
        placeholder="Add age..."
        name="age"
        value={props.age}
        />
        <input 
        type="text"
        onChange={props.handleTextInput}
        placeholder="Add email..."
        name="email"
        value={props.email}
        />
        <button 
        onClick={props.handleSubmit}
        >
        Add Friend
        </button>
      </form>
    )
  };

  export default FriendInput;
  