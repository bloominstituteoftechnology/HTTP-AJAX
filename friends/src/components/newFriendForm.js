import React from 'react';


const NewFriendForm = props => {
    console.log(props);
    return (
        <div>
            <h2>Add a new Friend:</h2>
            <h3>{props.friend}</h3>

            <form>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={props.name}
                    onChange={props.addChangeHandler}
                />
                <input
                    type='text'
                    placeholder="age"
                    name='age'
                    value={props.age}
                    onChange={props.addChangeHandler}

                />
                <input
                    type='text'
                    placeholder="email"
                    name='email'
                    value={props.email}
                    onChange={props.addChangeHandler}
                />
            </form>
            <button onClick={props.newAddFriend}>Add New Friend</button>
        </div>
    )
}




export default NewFriendForm;