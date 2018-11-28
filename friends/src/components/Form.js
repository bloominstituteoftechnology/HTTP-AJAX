import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    return (
        <div className='form-container'>
            <p className='form-title'> Add a New Friend!</p>
            <form className='form' onSubmit={props.addFriend}>
                <input 
                    type='text' 
                    name='nameText' 
                    placeholder='Name' 
                    value={props.nameText} 
                    onChange={props.handleChange}
                />
                <input 
                    type='number' 
                    name='ageText' 
                    placeholder='Age' 
                    value={props.ageText} 
                    onChange={props.handleChange}
                />
                <input 
                    type='email' 
                    name='emailText' 
                    placeholder='E-mail' 
                    value={props.emailText} 
                    onChange={props.handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

Form.propTypes = {
    nameText: PropTypes.string,
    ageText: PropTypes.number,
    emailText: PropTypes.string,
}

export default Form;