import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin: 50px 0;
`

const AddFriend = () => {
    return (
        <div>
        <Form>
            <input type='text' name='addFriend' id='1' value='addFriend' placeholder='Add a friends name' />
            <button>Submit</button>
        </Form>
        </div>
    )
}

export default AddFriend