import React from 'react';

const NewFriend = (props) => {
    return (
        <form onSubmit={props.submitHandler}>
            <h3>New Friend? Enter their info: </h3>
            <input type="text" name="name" placeholder="Name" onChange={props.handleChange} value={props.name} />
            <input type="text" name="age" placeholder="Age" onChange={props.handleChange} value={props.age} />
            <input type="text" name="email" placeholder="Email" onChange={props.handleChange} value={props.email} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewFriend;