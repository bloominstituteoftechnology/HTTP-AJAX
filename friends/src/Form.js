import React from 'react';
import {FormStyle, InputStyle, Submit} from './Styled Components';

const Form = (props) => {
    return(
        <FormStyle id="form">
          <h1>Add a new friend!</h1>
          <InputStyle onChange={props.change} id='name' type='text' placeholder='name'></InputStyle>
          <InputStyle onChange={props.change} id='age' type='number' placeholder='age'></InputStyle>
          <InputStyle onChange={props.change} id='email' type='email' placeholder='email'></InputStyle>
          <Submit onClick={props.submit}>Add Friend</Submit>
        </FormStyle>
    )
};

export default Form;

