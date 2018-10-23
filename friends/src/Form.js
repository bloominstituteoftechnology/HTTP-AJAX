import React from 'react';

const Form = (props) => {
    return(
        <form>
          <h1>Add a new friend!</h1>
          <input onChange={props.setName} name='name' type='text' placeholder='name'></input>
          <input onChange={props.setAge} name='age' type='number' placeholder='age'></input>
          <input onChange={props.setEmail} name='email' type='email' placeholder='email'></input>
          <button onClick={props.submit}>Submit</button>
        </form>
    )
};

export default Form;
