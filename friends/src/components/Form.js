import React from 'react';

import '../App.css';

const Form = (props) => {
  return(
    <form>
            <input 
              name="name" 
              placeholder="Name"
              type="text"
              onChange={props.handleChange}
            />
            <input
              name="age" 
              placeholder="Age"
              type="text"
              onChange={props.handleChange}
            />
            <input
              name="email" 
              placeholder="Email"
              type="text"
              onChange={props.handleChange}
            />
    </form>
  )
}
export default Form;

