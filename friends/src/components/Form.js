import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    p{

    }
    
    input{
        width: 97%;
    }

    button{
        margin: 10px;
    }

`

const Form = props => {
    return (
        <FormWrapper>
            <h3>Add a Friend...</h3>
            <input 
                type="text"
                name="name"
                value={props.value}
                placeholder="Name"
            />
            <input 
                type="number"
                name="age"
                value={props.value}
                placeholder="Age"
            />
            <input 
                type="text"
                name="email"
                value={props.value}
                placeholder="Email"
            />
            <button  
                type="submit" >
                Add Contact
            </button>
        </FormWrapper>
    );
}

export default Form;