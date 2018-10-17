import React, {Fragment} from 'react';

const FriendForm = props => {
    return (
      <Fragment>
      <form>
        <label>Name: </label>
        <input 
          type="text" 
          placeholder="Name" 
          required value={props.name} 
          onChange={props.handleChange} 
          name="name" />
        <label>Age: </label>
        <input 
          type="text" 
          placeholder="Age" 
          required value={props.age}
          type="number" 
          onChange={props.handleChange} 
          name="age" />
        <label>Email: </label>
        <input 
          type="text" 
          placeholder="Email" 
          required value={props.email}  
          onChange={props.handleChange} 
          name="email" />
      </form>
    </Fragment>
  );

}
  
  export default FriendForm;
  