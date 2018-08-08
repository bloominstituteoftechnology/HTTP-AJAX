import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin: 25px 0 50px 0;
`
const FormHeader = styled.h1`
    margin: 50px 0 0 0;
`
const AddFriend = (props) => {
    return (
        <div>
        <FormHeader>Add Friend</FormHeader>
        <Form>
            <input onChange={props.updateInput} type='text' name='name' id='1' value={props.value} placeholder='name' />
            <input onChange={props.updateInput} type='number' name='age' id='2' value={props.value} placeholder='age' />
            <input onChange={props.updateInput} type='text' name='email' id='3' value={props.value} placeholder='email' />
            <button>Submit</button>
        </Form>
        </div>
    )
}

export default AddFriend