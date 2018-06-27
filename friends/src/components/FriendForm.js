import React from 'react';
import PropTypes from 'prop-types';

const FriendForm = props => {
    return (
        <div>
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
            <button onClick={props.addFriend}>Add Friend</button>
        </div>
    );
}

FriendForm.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
}
export default FriendForm;