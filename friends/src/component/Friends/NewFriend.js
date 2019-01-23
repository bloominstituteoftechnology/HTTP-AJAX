import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    h1{
        text-align:center;
    }
    input{
        margin-bottom: 15px;
        padding: 8px;
        &::placeholder{
            text-align:center;
        }
    }
    button{
        background-color: lightgrey;
        border: 1px solid lightgrey;
        border-radius: 5px;
        padding: 5px 10px;
    }
`;

const NewFriend = props => {
    return(
        <StyledForm onSubmit={props.updating ? props.handleUpdate : props.submitFriend} onChange={props.handleChange}>
            <h1>New Friend:</h1>
            <input type="text" name="name" value={props.nameValue} placeholder="Friends Name" required/>
            <input type="text" name="email" value={props.emailValue} placeholder="Friends E-Mail" required/>
            <input type="number" name="age" value={props.ageValue} placeholder="Friends Age" required/>
            <button type="submit">{props.updating ? 'Update' : 'Submit'}</button>
        </StyledForm>
    )
}

export default NewFriend