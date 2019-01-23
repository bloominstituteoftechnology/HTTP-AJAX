import React from 'react'

const NewFriend = props => {
    return(
        <form onSubmit={props.updating ? props.handleUpdate : props.submitFriend} onChange={props.handleChange}>
            <input type="text" name="name" value={props.nameValue} placeholder="Friends Name" required/>
            <input type="text" name="email" value={props.emailValue} placeholder="Friends E-Mail" required/>
            <input type="number" name="age" value={props.ageValue} placeholder="Friends Age" required/>
            <button type="submit">{props.updating ? 'Update' : 'Submit'}</button>
        </form>
    )
}

export default NewFriend