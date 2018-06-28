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

            <Link to='/'><button onClick={(e) => props.editFriend(props.id)}>Edit Friend</button></Link>
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