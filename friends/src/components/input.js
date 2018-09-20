import React from 'react';

const input = props => {
    return (
        <div>
            <input 
          type= 'text'
          onChange = {props.handleFormInput}
          placeholder = 'Name'
          name= 'name'
          value= {props.name}
        />
        <input 
          type= 'text'
          onChange = {props.handleFormInput}
          placeholder = 'Age'
          name= 'age'
          value= {props.age}
        />
        <input 
          type= 'text'
          onChange = {props.handleFormInput}
          placeholder = 'Email'
          name= 'email'
          value= {props.email}
        />
        <button onClick={props.saveFriend}>Save</button>
        </div>
    );
};

export default input;