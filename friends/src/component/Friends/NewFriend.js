import React from 'react'

const NewFriend = props => {
    return(
        <form onSubmit={props.submitFriend}>
            <input type="text" name="name" placeholder="Friends Name" required/>
            <input type="text" name="email" placeholder="Friends E-Mail" required/>
            <input type="number" name="age" placeholder="Friends Age" required/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewFriend