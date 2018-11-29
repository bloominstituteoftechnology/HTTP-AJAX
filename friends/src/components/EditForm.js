import React from 'react';
import PropTypes from 'prop-types';

const EditForm = props => {
    return (
        <div className={props.shouldEdit ? 'editform-container' : 'hide'}>
            <i className="fas fa-caret-up"></i>
            <form className='editform' onSubmit={props.handleEdit}>
                <input 
                    type='text' 
                    name='nameText' 
                    placeholder='Name' 
                    value={props.nameText} 
                    onChange={props.handleChange}
                    required
                />
                <input 
                    type='number' 
                    name='ageText' 
                    placeholder='Age' 
                    value={props.ageText} 
                    onChange={props.handleChange}
                    required
                />
                <input 
                    type='email' 
                    name='emailText' 
                    placeholder='E-mail' 
                    value={props.emailText} 
                    onChange={props.handleChange}
                    required
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

EditForm.propTypes = {
    nameText: PropTypes.string,
    ageText: PropTypes.number,
    emailText: PropTypes.string,
}

export default EditForm;