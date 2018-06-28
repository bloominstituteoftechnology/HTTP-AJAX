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

const FriendForm = props => {
    return (
        <div>
        <FormBox>
            <input type='text' 
            name='name'
            placeholder='Name'
            onChange={props.textHandler}
            />
            <input type='number' 
            name='age'
            placeholder='Age'
            onChange={props.textHandler}
            />
            <input type='text' 
            name='email'
            placeholder='Email'
            onChange={props.textHandler}
            />
            <input type='text' 
            name='location'
            placeholder='Location'
            onChange={props.textHandler}
            />
            <Link to='/'><button onClick={props.addFriend}>Add Friend</button></Link>
        </FormBox>

        </div>
    );
}

FriendForm.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    location: PropTypes.string
}
export default FriendForm;