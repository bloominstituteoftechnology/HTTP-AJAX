import React from 'react';
import {UpdateX, InputStyle, UpdateSubmit, Background, UpdateFormStyle, UpdateHeader} from './Styled Components';

const UpdateForm = (props) => {
    return(
        <Background>
        <UpdateFormStyle id="updateForm">
            <UpdateX onClick={props.exitForm} >X</UpdateX>
          <UpdateHeader>Update Your friend!</UpdateHeader>
          <InputStyle onChange={props.change} id='name' type='text' placeholder='name'></InputStyle>
          <InputStyle onChange={props.change} id='age' type='number' placeholder='age'></InputStyle>
          <InputStyle onChange={props.change} id='email' type='email' placeholder='email'></InputStyle>
          <UpdateSubmit onClick={props.update}>Update Friend</UpdateSubmit>
        </UpdateFormStyle>
        </Background>
    )
};

export default UpdateForm;

