import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

function FwenForm(props){
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
        </Fragment>
    )
}

FwenForm.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string,
    }),
    handleChange: PropTypes.func,
}

export default FwenForm;