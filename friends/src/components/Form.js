import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"            
                name="name"
                placeholder="Friend's Name"
                onChange={props.handleChange}
            />
            <input
                type="text"
                name="age"
                placeholder="Friend's Age"
                onChange={props.handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="Friend's Email"
                onChange={props.handleChange}
            />
            <button type="submit">Add Friend!</button>
        </form>
    );
}
 
export default Form;