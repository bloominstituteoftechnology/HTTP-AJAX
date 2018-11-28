import React from 'react';

const Form = props => {
    return (
        <div className='form-container'>
            <p className='form-title'> Add a New Friend!</p>
            <form className='form'>
                <input type='text' name='name' placeholder='Name'/>
                <input type='text' name='age' placeholder='Age'/>
                <input type='email' name='email' placeholder='E-mail'/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;