import React from 'react';

const Form = (props) => {
    return(
        <form>
          <h1>Add a new friend!</h1>
          <input onChange={props.change} id='name' type='text' placeholder='name'></input>
          <input onChange={props.change} id='age' type='number' placeholder='age'></input>
          <input onChange={props.change} id='email' type='email' placeholder='email'></input>
          <button onClick={props.submit}>Submit</button>
        </form>
    )
};

export default Form;
