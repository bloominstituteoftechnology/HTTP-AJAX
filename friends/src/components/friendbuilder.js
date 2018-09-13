import React from 'react';
import PropTypes from 'prop-types';

function FriendBuilder(props) {
    return (
        <div>
            <form onSubmit={props.updating ? props.putFriend : props.postFriend}>
                <label htmlFor='name'>Name: </label>
                <input name='name' type='text' onChange={props.handleInput} value={props.currentName}></input>
                <br />
                <label htmlFor='age'>Age: </label>
                <input name='age' type='number' onChange={props.handleInput} value={props.currentAge}></input>
                <br />
                <label htmlFor='email'>Email: </label>
                <input name='email' type='text' onChange={props.handleInput} value={props.currentEmail}></input>
                <br />
                <input type='submit' value='Submit'></input>
            </form>
        </div>
    );
}

FriendBuilder.propTypes = {
    postFriend: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    currentName: PropTypes.string.isRequired,
    currentAge: PropTypes.number.isRequired,
    currentEmail: PropTypes.string.isRequired,
    updating: PropTypes.bool.isRequired
};

export default FriendBuilder;
