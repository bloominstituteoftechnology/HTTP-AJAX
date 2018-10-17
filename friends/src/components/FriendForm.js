import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

function FriendForm(props){
    return(
        <Fragment>
            <label>New Friend:</label>
            <form>
                <input type='text'
                    placeholder='Name'
                    value={props.friend.name}
                    name='name'
                    onChange={props.handleChange}
                    required />
            </form>
            <form>
                <input type='number'
                placeholder='Age'
                value={props.friend.age}
                name='age'
                onChange={props.handleNumberChange}
                required />
            </form>
            <form>
                <input type='text'
                placeholder='E-mail'
                value={props.friend.email}
                name='email'
                onChange={props.handleChange}
                required />
            </form>
            <button onClick={props.handleAddNewFriend}>
                Submit
            </button>
        </Fragment>
    )
}

FriendForm.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    }),
    handleChange: PropTypes.func,
    handleAddNewFriend: PropTypes.func,
}

export default FriendForm;