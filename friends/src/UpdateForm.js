import React from 'react';
import {UpdateX, InputStyle, UpdateSubmit, Background, UpdateFormStyle, UpdateHeader} from './Styled Components';
import {Route} from 'react-router-dom';

const UpdateForm = (props) => {
    return(
        <Background>
        <UpdateFormStyle id="updateForm">
            <UpdateX onClick={props.exitForm} >X</UpdateX>
          <UpdateHeader>Update Your friend!</UpdateHeader>
          <InputStyle onChange={props.change} id='name' type='text' placeholder='name'></InputStyle>
          <InputStyle onChange={props.change} id='age' type='number' placeholder='age'></InputStyle>
          <InputStyle onChange={props.change} id='email' type='email' placeholder='email'></InputStyle>
          <UpdateSubmit>Update Friend</UpdateSubmit>
          {/* <Route path='/update' component={UpdateForm}><UpdateSubmit>Update Friend</UpdateSubmit></Route> */}
        </UpdateFormStyle>
        </Background>
    )
};

export default UpdateForm;

