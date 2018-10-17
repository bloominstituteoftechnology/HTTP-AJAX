import React from 'react'

const AddFriend = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Name:
                <input name="name" type="text" value={props.name} onChange={props.handleChange} />
            </label>
            <label>
                Age:
                <input name="age" type="number" value={props.age} onChange={props.handleChange} />
            </label>
            <label>
                Email:
                <input name="email" type="text" value={props.email} onChange={props.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddFriend