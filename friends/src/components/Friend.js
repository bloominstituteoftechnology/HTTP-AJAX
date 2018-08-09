import React from 'react';
import './Friend.css';

const Friend = props => {

  return (

    <div className = "friend-info">
    
      <h2>{props.friend.name}</h2>
      <h3>Age: {props.friend.age}</h3>
      <h3>Email: {props.friend.email}</h3>
      <div className = "button-container">
      <button >Edit</button>

    {props.showUpdatedFriend ? (
      <div>
        { ' '}
        {/* important note use name = 'age' since target.name=target.value, 'name' is standard syntax */}
        <input 
        value = {props.name} 
        onChange={props.inputHandler} 
        type = 'text' 
        placeholder='name' 
        name = 'name' 
        />
        
        <input 
        value = {props.age} o
        nChange={props.inputHandler} 
        type = 'text' 
        placeholder='age' 
        name = 'age' 
        />
        <input 
        value = {props.email} 
        onChange={props.inputHandler} 
        type = 'text' 
        placeholder='email' 
        name = 'email' 
        />
        <button 
        onClick = {props.onClick}>
        Save Changes
        </button>
        </div>
    ) : null}


      <button onClick = {() => this.deleteFriend()} > Remove </button>
      </div>
    </div>
  )
}

export default Friend