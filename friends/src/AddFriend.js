import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const FormContainer = styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    height: 400px;
    justify-content: space-evenly;

    input[type='submit'] {
        width: 100px;
    }

`

const AddFriend = (props) => {
    return (
        <FormContainer>
            <label>
                Name:
                <input name="name" type="text" value={props.name} onChange={props.handleChange} />
            </label>
            <label>
                Age:
                <input name="age" type="text" value={props.age} onChange={props.handleChange} />
            </label>
            <label>
                Email:
                <input name="email" type="text" value={props.email} onChange={props.handleChange} />
            </label>
            <Link to='/'><input type="submit" value="Submit" onClick={props.handleSubmit} /></Link>
        </FormContainer>
    )
}


export default AddFriend