import React from 'react';

const FormInput = props => {
  return (
    <div>
    <form>
      <input 
        onChange={props.addName}
        value={props.name}
        type="text"
        placeholder="Name"
       />
       <input 
        onChange={props.addAge}
        value={props.age}
        type="number"
        placeholder="Age"
       />
       <input 
        onChange={props.addEmail}
        value={props.email}
        type="email"
        placeholder="Email"
       />
       <button onClick={props.addFriend}>Add Friend</button>
    </form>
    </div>
  );
};

export default FormInput;
