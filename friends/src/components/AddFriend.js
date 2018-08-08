import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin: 25px 0 50px 0;
`
const FormHeader = styled.h1`
    margin: 50px 0 0 0;
`
const AddFriend = () => {
    return (
        <div>
        <FormHeader>Add Friend</FormHeader>
        <Form>
            <input type='text' name='name' id='1' value='' placeholder='name' />
            <input type='number' name='age' id='2' value='' placeholder='age' />
            <input type='text' name='email' id='3' value='' placeholder='email' />
            <button>Submit</button>
        </Form>
        </div>
    )
}

export default AddFriend