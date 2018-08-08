import React from 'react';

const FormInput = props => {
  return (
    <div>
    <form>
      <input 
        onChange={props.changeName}
        value={props.nameInput}
        type="text"
        placeholder="Name"
       />
       <input 
        onChange={props.changeAge}
        value={props.ageInput}
        type="number"
        placeholder="Age"
       />
       <input 
        onChange={props.changeEmail}
        value={props.emailInput}
        type="email"
        placeholder="Email"
       />
       <button onClick={props.add}>Add Friend</button>
    </form>
    </div>
  );
};

export default FormInput;
