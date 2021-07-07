import React from 'react';

const FormInput = props => {
  return (
    <div>
    <form>
      <input 
        onChange={props.handleChange}
        name="name"
        value={props.name}
        type="text"
        placeholder="Name"
       />
       <input 
        onChange={props.handleChange}
        name="age"
        value={props.age}
        type="number"
        placeholder="Age"
       />
       <input 
        onChange={props.handleChange}
        name="email"
        value={props.email}
        type="email"
        placeholder="Email"
       />
       </form>
    </div>
  );
};

export default FormInput;
