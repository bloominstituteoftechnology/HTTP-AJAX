import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function FriendForm(props) {
  const {name, age, email} = props.form;
  return(
    <Fragment>
      <form className='friend-form'>
        <label>Name: </label>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={props.handleChange} 
          name="name" />
        <label>Age: </label>
        <input 
          type="text" 
          placeholder="Age" 
          value={age}
          type="number" 
          onChange={props.handleChange} 
          name="age" />
        <label>Email: </label>
        <input 
          type="text" 
          placeholder="Email" 
          value={email}  
          onChange={props.handleChange} 
          name="email" />
        <button onClick={props.handleInput}>Submit</button>
      </form>
    </Fragment>
  );

}

FriendForm.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  }),
  handleChange: PropTypes.func
}

export default FriendForm;