import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    input{
        width: 97%;
    }

    button{
        margin: 10px;
    }

`

const Form = props => {
    return (
        <FormWrapper onSubmit={props.addFriend}>
            <h3>Add a Friend...</h3>
            <input 
                type="text"
                name="inputName"
                value={props.value}
                placeholder="Name"
                onChange={props.handleChange}
                value={props.inputName}
            />
            <input 
                type="number"
                min="21" max="120"
                name="inputAge"
                value={props.value}
                placeholder="Age"
                onChange={props.handleChange}
                value={props.inputAge}
            />
            <input 
                type="email"
                name="inputEmail"
                value={props.value}
                placeholder="Email"
                onChange={props.handleChange}
                value={props.inputEmail}
            />
            <button  
                type="submit" >
                Add Contact
            </button>
        </FormWrapper>
    );
}

export default Form;