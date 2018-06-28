import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';

const FormBox = Styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: auto;
margin: 30px auto;
padding: 20px;
border: 1px solid black;
background: lightgray;
`;

const EditForm = props => {
    return (
        <div>
        <FormBox>
            <input type='text' 
            name='name'
            placeholder={props.name}
            onChange={props.textHandler}
            />
            <input type='number' 
            name='age'
            placeholder={props.age}
            onChange={props.textHandler}
            />
            <input type='text' 
            name='email'
            placeholder={props.email}
            onChange={props.textHandler}
            />
            <input type='text' 
            name='location'
            placeholder={props.location}
            onChange={props.textHandler}
            />
            <div>
            <input type='radio' 
            name='gender'
            value='male'
            onChange={props.textHandler}
            />
            <label value='male'>Male</label>
            <input type='radio' 
            name='gender'
            value='female'
            onChange={props.textHandler}
            />
            <label value='female'>Female</label>
            </div>

            <Link to='/'><button onClick={props.editFriend}>Add Friend</button></Link>
        </FormBox>

        </div>
    );
}

EditForm.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    location: PropTypes.string
}
export default EditForm;